import { courseDatabase, CourseData } from "../utils/courseDatabase";

// Course interface
export interface Course {
  id: string;
  course_code: string;
  course_name: string;
  course_units: string;
  course_description: string;
  prerequisites: string;
}

export interface AIRecommendation {
  course: Course;
  score: number;
  reason: string;
}

export interface SearchResult {
  courses: Course[];
  recommendations?: AIRecommendation[];
  total: number;
}

class AIService {
  // Search courses with AI recommendations
  async searchCourses(
    query: string,
    limit: number = 5
  ): Promise<SearchResult> {
    try {
      console.log("aiService: Searching for query:", query);
      
      // Use the local course database instead of Supabase
      const searchResults = this.searchCourseDatabase(query);
      
      // Convert to Course interface
      const courses: Course[] = searchResults.map(result => ({
        id: result.course.id,
        course_code: result.course.course_code,
        course_name: result.course.course_name,
        course_units: result.course.course_units,
        course_description: result.course.course_description,
        prerequisites: result.course.prerequisites,
      }));

      console.log("aiService: Found courses:", courses.length);

      return {
        courses: courses.slice(0, limit),
        recommendations: searchResults.slice(0, limit),
        total: courses.length,
      };
    } catch (error) {
      console.error("Search error:", error);
      return {
        courses: [],
        recommendations: [],
        total: 0,
      };
    }
  }

  // Search the course database with scoring
  private searchCourseDatabase(query: string): AIRecommendation[] {
    const searchTerm = query.toLowerCase().trim();
    const searchWords = searchTerm.split(/\s+/).filter(word => word.length > 0);
    const results: AIRecommendation[] = [];

    for (const course of courseDatabase) {
      let score = 0;
      let reason = "";
      let matchType = "";

      // Exact course code match (highest priority)
      const courseCode = course.course_code.toLowerCase();
      const cleanSearchTerm = searchTerm.replace(/\s+/g, '');
      const cleanCourseCode = courseCode.replace(/\s+/g, '');
      
      if (cleanCourseCode === cleanSearchTerm) {
        score = 1.0;
        reason = `Exact match for course code "${query}"`;
        matchType = "exact_code";
      }
      // Partial course code match
      else if (cleanCourseCode.includes(cleanSearchTerm) || cleanSearchTerm.includes(cleanCourseCode)) {
        score = 0.9;
        reason = `Course code matches "${query}"`;
        matchType = "partial_code";
      }
      // Course name match
      else if (course.course_name.toLowerCase().includes(searchTerm)) {
        score = 0.8;
        reason = `Course name contains "${query}"`;
        matchType = "course_name";
      }
      // Comprehensive description search
      else {
        const courseDesc = course.course_description.toLowerCase();
        const courseName = course.course_name.toLowerCase();
        const courseCodeLower = course.course_code.toLowerCase();
        
        // Check if ALL search words are found in description, name, or code
        const allWordsFound = searchWords.every(word => 
          courseDesc.includes(word) || 
          courseName.includes(word) || 
          courseCodeLower.includes(word)
        );
        
        // Check if ANY search words are found
        const anyWordsFound = searchWords.some(word => 
          courseDesc.includes(word) || 
          courseName.includes(word) || 
          courseCodeLower.includes(word)
        );
        
        if (allWordsFound) {
          score = 0.75;
          reason = `All search terms found in course description: "${query}"`;
          matchType = "all_words";
        } else if (anyWordsFound) {
          // Count how many words match
          const matchingWords = searchWords.filter(word => 
            courseDesc.includes(word) || 
            courseName.includes(word) || 
            courseCodeLower.includes(word)
          );
          score = 0.6 + (matchingWords.length / searchWords.length) * 0.1;
          reason = `${matchingWords.length}/${searchWords.length} search terms found: "${query}"`;
          matchType = "partial_words";
        }
        // Subject area match as fallback
        else if (this.getSubjectMatchScore(course, searchTerm) > 0) {
          score = this.getSubjectMatchScore(course, searchTerm);
          reason = `Related to "${query}"`;
          matchType = "subject_area";
        }
      }

      if (score > 0) {
        results.push({
          course: {
            id: course.id,
            course_code: course.course_code,
            course_name: course.course_name,
            course_units: course.course_units,
            course_description: course.course_description,
            prerequisites: course.prerequisites,
          },
          score,
          reason,
        });
      }
    }

    // Sort by score (highest first) and return top 5
    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }

  // Get subject match score for broader searches
  private getSubjectMatchScore(course: CourseData, searchTerm: string): number {
    const courseCode = course.course_code.toLowerCase();
    const courseName = course.course_name.toLowerCase();
    const courseDesc = course.course_description.toLowerCase();

    // Computer Science & Programming
    if (searchTerm.includes('computer') || searchTerm.includes('programming') || searchTerm.includes('cs') || searchTerm.includes('software') || searchTerm.includes('algorithm') || searchTerm.includes('data structure')) {
      if (courseCode.startsWith('cse') || courseCode.startsWith('dsc') || courseDesc.includes('programming') || courseDesc.includes('software') || courseDesc.includes('algorithm') || courseDesc.includes('data structure')) {
        return 0.6;
      }
    }

    // Mathematics & Calculus
    if (searchTerm.includes('math') || searchTerm.includes('calculus') || searchTerm.includes('algebra') || searchTerm.includes('linear') || searchTerm.includes('analysis') || searchTerm.includes('differential') || searchTerm.includes('integral')) {
      if (courseCode.startsWith('math') || courseDesc.includes('calculus') || courseDesc.includes('algebra') || courseDesc.includes('analysis') || courseDesc.includes('differential') || courseDesc.includes('integral')) {
        return 0.6;
      }
    }

    // Statistics & Probability
    if (searchTerm.includes('statistics') || searchTerm.includes('statistical') || searchTerm.includes('probability') || searchTerm.includes('regression') || searchTerm.includes('inference') || searchTerm.includes('experimental design')) {
      if (courseCode.startsWith('stat') || courseCode.startsWith('math 180') || courseDesc.includes('statistics') || courseDesc.includes('probability') || courseDesc.includes('regression') || courseDesc.includes('inference')) {
        return 0.6;
      }
    }

    // Economics & Game Theory
    if (searchTerm.includes('econ') || searchTerm.includes('economics') || searchTerm.includes('game theory') || searchTerm.includes('microeconomics') || searchTerm.includes('macroeconomics') || searchTerm.includes('econometrics')) {
      if (courseCode.startsWith('econ') || courseDesc.includes('economics') || courseDesc.includes('game theory') || courseDesc.includes('microeconomics') || courseDesc.includes('macroeconomics') || courseDesc.includes('econometrics')) {
        return 0.6;
      }
    }

    // Chemistry & Organic Chemistry
    if (searchTerm.includes('chem') || searchTerm.includes('chemistry') || searchTerm.includes('organic') || searchTerm.includes('biochemistry') || searchTerm.includes('physical chemistry') || searchTerm.includes('inorganic')) {
      if (courseCode.startsWith('chem') || courseDesc.includes('chemistry') || courseDesc.includes('organic') || courseDesc.includes('biochemistry') || courseDesc.includes('physical chemistry') || courseDesc.includes('inorganic')) {
        return 0.6;
      }
    }

    // Physics & Quantum Mechanics
    if (searchTerm.includes('phys') || searchTerm.includes('physics') || searchTerm.includes('mechanics') || searchTerm.includes('quantum') || searchTerm.includes('electromagnetism') || searchTerm.includes('thermodynamics')) {
      if (courseCode.startsWith('phys') || courseDesc.includes('physics') || courseDesc.includes('mechanics') || courseDesc.includes('quantum') || courseDesc.includes('electromagnetism') || courseDesc.includes('thermodynamics')) {
        return 0.6;
      }
    }

    // Biology & Life Sciences
    if (searchTerm.includes('bio') || searchTerm.includes('biology') || searchTerm.includes('cell') || searchTerm.includes('genetics') || searchTerm.includes('physiology') || searchTerm.includes('anatomy') || searchTerm.includes('immunology') || searchTerm.includes('neurobiology')) {
      if (courseCode.startsWith('bild') || courseDesc.includes('biology') || courseDesc.includes('cell') || courseDesc.includes('genetics') || courseDesc.includes('physiology') || courseDesc.includes('anatomy') || courseDesc.includes('immunology') || courseDesc.includes('neurobiology')) {
        return 0.6;
      }
    }

    // Psychology & Cognitive Science
    if (searchTerm.includes('psych') || searchTerm.includes('psychology') || searchTerm.includes('cognitive') || searchTerm.includes('perception') || searchTerm.includes('memory') || searchTerm.includes('learning') || searchTerm.includes('neural') || searchTerm.includes('brain')) {
      if (courseCode.startsWith('psyc') || courseCode.startsWith('cogs') || courseDesc.includes('psychology') || courseDesc.includes('cognitive') || courseDesc.includes('perception') || courseDesc.includes('memory') || courseDesc.includes('learning') || courseDesc.includes('neural') || courseDesc.includes('brain')) {
        return 0.6;
      }
    }

    // Data Science & Machine Learning
    if (searchTerm.includes('data') || searchTerm.includes('machine learning') || searchTerm.includes('analytics') || searchTerm.includes('mining') || searchTerm.includes('artificial intelligence') || searchTerm.includes('nlp') || searchTerm.includes('text mining')) {
      if (courseCode.startsWith('dsc') || courseDesc.includes('data') || courseDesc.includes('machine learning') || courseDesc.includes('analytics') || courseDesc.includes('mining') || courseDesc.includes('artificial intelligence') || courseDesc.includes('natural language')) {
        return 0.6;
      }
    }

    // Laboratory & Experimental
    if (searchTerm.includes('laboratory') || searchTerm.includes('lab') || searchTerm.includes('experimental') || searchTerm.includes('techniques') || searchTerm.includes('methodology')) {
      if (courseDesc.includes('laboratory') || courseDesc.includes('lab') || courseDesc.includes('experimental') || courseDesc.includes('techniques') || courseDesc.includes('methodology')) {
        return 0.5;
      }
    }

    // Research & Capstone
    if (searchTerm.includes('research') || searchTerm.includes('capstone') || searchTerm.includes('project') || searchTerm.includes('seminar')) {
      if (courseDesc.includes('research') || courseDesc.includes('capstone') || courseDesc.includes('project') || courseDesc.includes('seminar')) {
        return 0.5;
      }
    }

    // Engineering & Design
    if (searchTerm.includes('engineering') || searchTerm.includes('design') || searchTerm.includes('mechanical') || searchTerm.includes('electrical') || searchTerm.includes('thermodynamics') || searchTerm.includes('fluid mechanics') || searchTerm.includes('heat transfer') || searchTerm.includes('dynamics') || searchTerm.includes('vibrations') || searchTerm.includes('circuits') || searchTerm.includes('electronics') || searchTerm.includes('signal processing')) {
      if (courseCode.startsWith('mae') || courseCode.startsWith('ece') || courseDesc.includes('engineering') || courseDesc.includes('design') || courseDesc.includes('thermodynamics') || courseDesc.includes('fluid mechanics') || courseDesc.includes('heat transfer') || courseDesc.includes('dynamics') || courseDesc.includes('vibrations') || courseDesc.includes('circuits') || courseDesc.includes('electronics') || courseDesc.includes('signal processing')) {
        return 0.6;
      }
    }

    // Business & Management
    if (searchTerm.includes('business') || searchTerm.includes('management') || searchTerm.includes('marketing') || searchTerm.includes('finance') || searchTerm.includes('accounting') || searchTerm.includes('strategy') || searchTerm.includes('operations') || searchTerm.includes('supply chain') || searchTerm.includes('investment') || searchTerm.includes('corporate') || searchTerm.includes('organizational')) {
      if (courseCode.startsWith('mgt') || courseDesc.includes('business') || courseDesc.includes('management') || courseDesc.includes('marketing') || courseDesc.includes('finance') || courseDesc.includes('accounting') || courseDesc.includes('operations') || courseDesc.includes('supply chain') || courseDesc.includes('investment') || courseDesc.includes('corporate') || courseDesc.includes('organizational')) {
        return 0.6;
      }
    }

    // Communication & Media
    if (searchTerm.includes('communication') || searchTerm.includes('media') || searchTerm.includes('public speaking') || searchTerm.includes('journalism') || searchTerm.includes('digital media') || searchTerm.includes('interpersonal') || searchTerm.includes('argumentation') || searchTerm.includes('debate') || searchTerm.includes('persuasion') || searchTerm.includes('social media')) {
      if (courseCode.startsWith('comm') || courseDesc.includes('communication') || courseDesc.includes('media') || courseDesc.includes('public speaking') || courseDesc.includes('journalism') || courseDesc.includes('interpersonal') || courseDesc.includes('argumentation') || courseDesc.includes('debate') || courseDesc.includes('persuasion') || courseDesc.includes('social media')) {
        return 0.6;
      }
    }

    // Literature & Writing
    if (searchTerm.includes('literature') || searchTerm.includes('writing') || searchTerm.includes('poetry') || searchTerm.includes('fiction') || searchTerm.includes('creative writing') || searchTerm.includes('drama') || searchTerm.includes('narrative') || searchTerm.includes('character') || searchTerm.includes('story') || searchTerm.includes('theatrical') || searchTerm.includes('performance') || searchTerm.includes('literary analysis')) {
      if (courseCode.startsWith('lit') || courseDesc.includes('literature') || courseDesc.includes('writing') || courseDesc.includes('poetry') || courseDesc.includes('fiction') || courseDesc.includes('drama') || courseDesc.includes('narrative') || courseDesc.includes('character') || courseDesc.includes('story') || courseDesc.includes('theatrical') || courseDesc.includes('performance') || courseDesc.includes('literary analysis')) {
        return 0.6;
      }
    }

    // History & Historical Studies
    if (searchTerm.includes('history') || searchTerm.includes('historical') || searchTerm.includes('ancient') || searchTerm.includes('medieval') || searchTerm.includes('modern') || searchTerm.includes('civilization') || searchTerm.includes('warfare') || searchTerm.includes('military') || searchTerm.includes('archaeology')) {
      if (courseCode.startsWith('hist') || courseDesc.includes('history') || courseDesc.includes('historical') || courseDesc.includes('ancient') || courseDesc.includes('medieval') || courseDesc.includes('modern') || courseDesc.includes('civilization') || courseDesc.includes('warfare') || courseDesc.includes('military') || courseDesc.includes('archaeology')) {
        return 0.6;
      }
    }

    // Political Science & Government
    if (searchTerm.includes('political') || searchTerm.includes('politics') || searchTerm.includes('government') || searchTerm.includes('democracy') || searchTerm.includes('international relations') || searchTerm.includes('public policy') || searchTerm.includes('political theory') || searchTerm.includes('voting') || searchTerm.includes('diplomacy') || searchTerm.includes('security')) {
      if (courseCode.startsWith('poli') || courseDesc.includes('political') || courseDesc.includes('politics') || courseDesc.includes('government') || courseDesc.includes('democracy') || courseDesc.includes('international relations') || courseDesc.includes('public policy') || courseDesc.includes('political theory') || courseDesc.includes('voting') || courseDesc.includes('diplomacy') || courseDesc.includes('security')) {
        return 0.6;
      }
    }

    // Sociology & Social Studies
    if (searchTerm.includes('sociology') || searchTerm.includes('social') || searchTerm.includes('society') || searchTerm.includes('inequality') || searchTerm.includes('family') || searchTerm.includes('education') || searchTerm.includes('urban') || searchTerm.includes('community') || searchTerm.includes('social problems') || searchTerm.includes('social theory')) {
      if (courseCode.startsWith('soc') || courseDesc.includes('sociology') || courseDesc.includes('social') || courseDesc.includes('society') || courseDesc.includes('inequality') || courseDesc.includes('family') || courseDesc.includes('education') || courseDesc.includes('urban') || courseDesc.includes('community') || courseDesc.includes('social problems') || courseDesc.includes('social theory')) {
        return 0.6;
      }
    }

    // Anthropology & Cultural Studies
    if (searchTerm.includes('anthropology') || searchTerm.includes('cultural') || searchTerm.includes('culture') || searchTerm.includes('ethnography') || searchTerm.includes('evolution') || searchTerm.includes('archaeology') || searchTerm.includes('linguistic') || searchTerm.includes('fieldwork') || searchTerm.includes('cross-cultural')) {
      if (courseCode.startsWith('anth') || courseDesc.includes('anthropology') || courseDesc.includes('cultural') || courseDesc.includes('culture') || courseDesc.includes('ethnography') || courseDesc.includes('evolution') || courseDesc.includes('archaeology') || courseDesc.includes('linguistic') || courseDesc.includes('fieldwork') || courseDesc.includes('cross-cultural')) {
        return 0.6;
      }
    }

    // Philosophy & Logic
    if (searchTerm.includes('philosophy') || searchTerm.includes('philosophical') || searchTerm.includes('logic') || searchTerm.includes('ethics') || searchTerm.includes('metaphysics') || searchTerm.includes('epistemology') || searchTerm.includes('moral') || searchTerm.includes('reasoning') || searchTerm.includes('consciousness') || searchTerm.includes('mind')) {
      if (courseCode.startsWith('phil') || courseDesc.includes('philosophy') || courseDesc.includes('philosophical') || courseDesc.includes('logic') || courseDesc.includes('ethics') || courseDesc.includes('metaphysics') || courseDesc.includes('epistemology') || courseDesc.includes('moral') || courseDesc.includes('reasoning') || courseDesc.includes('consciousness') || courseDesc.includes('mind')) {
        return 0.6;
      }
    }

    // Languages & Linguistics
    if (searchTerm.includes('language') || searchTerm.includes('linguistics') || searchTerm.includes('spanish') || searchTerm.includes('french') || searchTerm.includes('german') || searchTerm.includes('chinese') || searchTerm.includes('japanese') || searchTerm.includes('korean') || searchTerm.includes('italian') || searchTerm.includes('russian') || searchTerm.includes('arabic') || searchTerm.includes('portuguese') || searchTerm.includes('hebrew') || searchTerm.includes('latin') || searchTerm.includes('grammar') || searchTerm.includes('translation') || searchTerm.includes('phonetics') || searchTerm.includes('syntax') || searchTerm.includes('morphology') || searchTerm.includes('semantics') || searchTerm.includes('calligraphy') || searchTerm.includes('islamic') || searchTerm.includes('biblical') || searchTerm.includes('classical')) {
      if (courseCode.startsWith('ling') || courseCode.startsWith('span') || courseCode.startsWith('fren') || courseCode.startsWith('germ') || courseCode.startsWith('chin') || courseCode.startsWith('japn') || courseCode.startsWith('kore') || courseCode.startsWith('ital') || courseCode.startsWith('russ') || courseCode.startsWith('arab') || courseCode.startsWith('port') || courseCode.startsWith('hebr') || courseCode.startsWith('latn') || courseDesc.includes('language') || courseDesc.includes('linguistics') || courseDesc.includes('grammar') || courseDesc.includes('translation') || courseDesc.includes('phonetics') || courseDesc.includes('syntax') || courseDesc.includes('morphology') || courseDesc.includes('semantics') || courseDesc.includes('calligraphy') || courseDesc.includes('islamic') || courseDesc.includes('biblical') || courseDesc.includes('classical')) {
        return 0.6;
      }
    }

    // Music & Arts
    if (searchTerm.includes('music') || searchTerm.includes('musical') || searchTerm.includes('art') || searchTerm.includes('painting') || searchTerm.includes('sculpture') || searchTerm.includes('photography') || searchTerm.includes('drawing') || searchTerm.includes('composition') || searchTerm.includes('orchestration') || searchTerm.includes('jazz') || searchTerm.includes('classical') || searchTerm.includes('popular music') || searchTerm.includes('world music') || searchTerm.includes('digital art') || searchTerm.includes('contemporary art') || searchTerm.includes('modern art')) {
      if (courseCode.startsWith('mus') || courseCode.startsWith('vis') || courseDesc.includes('music') || courseDesc.includes('musical') || courseDesc.includes('art') || courseDesc.includes('painting') || courseDesc.includes('sculpture') || courseDesc.includes('photography') || courseDesc.includes('drawing') || courseDesc.includes('composition') || courseDesc.includes('orchestration') || courseDesc.includes('jazz') || courseDesc.includes('classical') || courseDesc.includes('popular music') || courseDesc.includes('world music') || courseDesc.includes('digital art') || courseDesc.includes('contemporary art') || courseDesc.includes('modern art')) {
        return 0.6;
      }
    }

    // Environmental Studies & Sustainability
    if (searchTerm.includes('environmental') || searchTerm.includes('environment') || searchTerm.includes('sustainability') || searchTerm.includes('climate') || searchTerm.includes('ecology') || searchTerm.includes('conservation') || searchTerm.includes('biodiversity') || searchTerm.includes('oceanography') || searchTerm.includes('marine') || searchTerm.includes('renewable') || searchTerm.includes('green') || searchTerm.includes('pollution') || searchTerm.includes('ecosystem')) {
      if (courseCode.startsWith('envr') || courseDesc.includes('environmental') || courseDesc.includes('environment') || courseDesc.includes('sustainability') || courseDesc.includes('climate') || courseDesc.includes('ecology') || courseDesc.includes('conservation') || courseDesc.includes('biodiversity') || courseDesc.includes('oceanography') || courseDesc.includes('marine') || courseDesc.includes('renewable') || courseDesc.includes('green') || courseDesc.includes('pollution') || courseDesc.includes('ecosystem')) {
        return 0.6;
      }
    }

    // Medicine & Health
    if (searchTerm.includes('medicine') || searchTerm.includes('medical') || searchTerm.includes('health') || searchTerm.includes('anatomy') || searchTerm.includes('physiology') || searchTerm.includes('pharmacology') || searchTerm.includes('pathology') || searchTerm.includes('clinical') || searchTerm.includes('patient') || searchTerm.includes('diagnosis') || searchTerm.includes('treatment') || searchTerm.includes('disease') || searchTerm.includes('public health') || searchTerm.includes('epidemiology') || searchTerm.includes('bioethics')) {
      if (courseCode.startsWith('med') || courseDesc.includes('medicine') || courseDesc.includes('medical') || courseDesc.includes('health') || courseDesc.includes('anatomy') || courseDesc.includes('physiology') || courseDesc.includes('pharmacology') || courseDesc.includes('pathology') || courseDesc.includes('clinical') || courseDesc.includes('patient') || courseDesc.includes('diagnosis') || courseDesc.includes('treatment') || courseDesc.includes('disease') || courseDesc.includes('public health') || courseDesc.includes('epidemiology') || courseDesc.includes('bioethics')) {
        return 0.6;
      }
    }

    // Education & Teaching
    if (searchTerm.includes('education') || searchTerm.includes('teaching') || searchTerm.includes('learning') || searchTerm.includes('curriculum') || searchTerm.includes('classroom') || searchTerm.includes('pedagogy') || searchTerm.includes('instruction') || searchTerm.includes('assessment') || searchTerm.includes('evaluation') || searchTerm.includes('multicultural') || searchTerm.includes('literacy') || searchTerm.includes('special education') || searchTerm.includes('educational technology')) {
      if (courseCode.startsWith('eds') || courseDesc.includes('education') || courseDesc.includes('teaching') || courseDesc.includes('learning') || courseDesc.includes('curriculum') || courseDesc.includes('classroom') || courseDesc.includes('pedagogy') || courseDesc.includes('instruction') || courseDesc.includes('assessment') || courseDesc.includes('evaluation') || courseDesc.includes('multicultural') || courseDesc.includes('literacy') || courseDesc.includes('special education') || courseDesc.includes('educational technology')) {
        return 0.6;
      }
    }

    // Film & Media
    if (searchTerm.includes('film') || searchTerm.includes('cinema') || searchTerm.includes('movie') || searchTerm.includes('video') || searchTerm.includes('media') || searchTerm.includes('screenwriting') || searchTerm.includes('directing') || searchTerm.includes('cinematography') || searchTerm.includes('editing') || searchTerm.includes('documentary') || searchTerm.includes('animation') || searchTerm.includes('sound design') || searchTerm.includes('digital media') || searchTerm.includes('filmmaking')) {
      if (courseCode.startsWith('film') || courseDesc.includes('film') || courseDesc.includes('cinema') || courseDesc.includes('movie') || courseDesc.includes('video') || courseDesc.includes('media') || courseDesc.includes('screenwriting') || courseDesc.includes('directing') || courseDesc.includes('cinematography') || courseDesc.includes('editing') || courseDesc.includes('documentary') || courseDesc.includes('animation') || courseDesc.includes('sound design') || courseDesc.includes('digital media') || courseDesc.includes('filmmaking')) {
        return 0.6;
      }
    }

    // Theater & Performance
    if (searchTerm.includes('theater') || searchTerm.includes('theatre') || searchTerm.includes('drama') || searchTerm.includes('acting') || searchTerm.includes('performance') || searchTerm.includes('stage') || searchTerm.includes('play') || searchTerm.includes('directing') || searchTerm.includes('playwriting') || searchTerm.includes('musical theater') || searchTerm.includes('dance') || searchTerm.includes('choreography') || searchTerm.includes('theatrical') || searchTerm.includes('production')) {
      if (courseCode.startsWith('tdge') || courseDesc.includes('theater') || courseDesc.includes('theatre') || courseDesc.includes('drama') || courseDesc.includes('acting') || courseDesc.includes('performance') || courseDesc.includes('stage') || courseDesc.includes('play') || courseDesc.includes('directing') || courseDesc.includes('playwriting') || courseDesc.includes('musical theater') || courseDesc.includes('dance') || courseDesc.includes('choreography') || courseDesc.includes('theatrical') || courseDesc.includes('production')) {
        return 0.6;
      }
    }

    // Bioengineering & Biomedical
    if (searchTerm.includes('bioengineering') || searchTerm.includes('biomedical') || searchTerm.includes('biomechanics') || searchTerm.includes('biomaterials') || searchTerm.includes('tissue engineering') || searchTerm.includes('medical device') || searchTerm.includes('drug delivery') || searchTerm.includes('neural engineering') || searchTerm.includes('biomedical imaging') || searchTerm.includes('signal processing') || searchTerm.includes('regenerative medicine') || searchTerm.includes('neuroprosthetics')) {
      if (courseCode.startsWith('beng') || courseDesc.includes('bioengineering') || courseDesc.includes('biomedical') || courseDesc.includes('biomechanics') || courseDesc.includes('biomaterials') || courseDesc.includes('tissue engineering') || courseDesc.includes('medical device') || courseDesc.includes('drug delivery') || courseDesc.includes('neural engineering') || courseDesc.includes('biomedical imaging') || courseDesc.includes('signal processing') || courseDesc.includes('regenerative medicine') || courseDesc.includes('neuroprosthetics')) {
        return 0.6;
      }
    }

    // Nanotechnology & Nanoengineering
    if (searchTerm.includes('nanotechnology') || searchTerm.includes('nanoengineering') || searchTerm.includes('nanomaterials') || searchTerm.includes('nanofabrication') || searchTerm.includes('nanophotonics') || searchTerm.includes('nanobiotechnology') || searchTerm.includes('quantum nanoscience') || searchTerm.includes('nanoelectronics') || searchTerm.includes('nanomechanics') || searchTerm.includes('nanoscale') || searchTerm.includes('nanoparticle') || searchTerm.includes('quantum dots') || searchTerm.includes('molecular electronics')) {
      if (courseCode.startsWith('nano') || courseDesc.includes('nanotechnology') || courseDesc.includes('nanoengineering') || courseDesc.includes('nanomaterials') || courseDesc.includes('nanofabrication') || courseDesc.includes('nanophotonics') || courseDesc.includes('nanobiotechnology') || courseDesc.includes('quantum nanoscience') || courseDesc.includes('nanoelectronics') || courseDesc.includes('nanomechanics') || courseDesc.includes('nanoscale') || courseDesc.includes('nanoparticle') || courseDesc.includes('quantum dots') || courseDesc.includes('molecular electronics')) {
        return 0.6;
      }
    }

    // International Relations & Global Studies
    if (searchTerm.includes('international relations') || searchTerm.includes('global politics') || searchTerm.includes('international law') || searchTerm.includes('diplomacy') || searchTerm.includes('international economics') || searchTerm.includes('conflict resolution') || searchTerm.includes('human rights') || searchTerm.includes('global security') || searchTerm.includes('international development') || searchTerm.includes('regional studies') || searchTerm.includes('peacebuilding') || searchTerm.includes('mediation') || searchTerm.includes('global governance')) {
      if (courseCode.startsWith('irgn') || courseDesc.includes('international relations') || courseDesc.includes('global politics') || courseDesc.includes('international law') || courseDesc.includes('diplomacy') || courseDesc.includes('international economics') || courseDesc.includes('conflict resolution') || courseDesc.includes('human rights') || courseDesc.includes('global security') || courseDesc.includes('international development') || courseDesc.includes('regional studies') || courseDesc.includes('peacebuilding') || courseDesc.includes('mediation') || courseDesc.includes('global governance')) {
        return 0.6;
      }
    }

    // Law & Legal Studies
    if (searchTerm.includes('law') || searchTerm.includes('legal') || searchTerm.includes('constitutional') || searchTerm.includes('criminal') || searchTerm.includes('civil') || searchTerm.includes('business law') || searchTerm.includes('legal research') || searchTerm.includes('environmental law') || searchTerm.includes('intellectual property') || searchTerm.includes('family law') || searchTerm.includes('legal ethics') || searchTerm.includes('contracts') || searchTerm.includes('torts') || searchTerm.includes('property law')) {
      if (courseCode.startsWith('law') || courseDesc.includes('law') || courseDesc.includes('legal') || courseDesc.includes('constitutional') || courseDesc.includes('criminal') || courseDesc.includes('civil') || courseDesc.includes('business law') || courseDesc.includes('legal research') || courseDesc.includes('environmental law') || courseDesc.includes('intellectual property') || courseDesc.includes('family law') || courseDesc.includes('legal ethics') || courseDesc.includes('contracts') || courseDesc.includes('torts') || courseDesc.includes('property law')) {
        return 0.6;
      }
    }

    // Architecture & Design
    if (searchTerm.includes('architecture') || searchTerm.includes('architectural') || searchTerm.includes('design') || searchTerm.includes('building') || searchTerm.includes('construction') || searchTerm.includes('urban design') || searchTerm.includes('sustainable architecture') || searchTerm.includes('digital design') || searchTerm.includes('interior design') || searchTerm.includes('landscape architecture') || searchTerm.includes('architectural theory') || searchTerm.includes('building technology') || searchTerm.includes('architectural history') || searchTerm.includes('space planning')) {
      if (courseCode.startsWith('arch') || courseDesc.includes('architecture') || courseDesc.includes('architectural') || courseDesc.includes('design') || courseDesc.includes('building') || courseDesc.includes('construction') || courseDesc.includes('urban design') || courseDesc.includes('sustainable architecture') || courseDesc.includes('digital design') || courseDesc.includes('interior design') || courseDesc.includes('landscape architecture') || courseDesc.includes('architectural theory') || courseDesc.includes('building technology') || courseDesc.includes('architectural history') || courseDesc.includes('space planning')) {
        return 0.6;
      }
    }

    // Urban Planning & Development
    if (searchTerm.includes('urban planning') || searchTerm.includes('planning') || searchTerm.includes('land use') || searchTerm.includes('transportation planning') || searchTerm.includes('environmental planning') || searchTerm.includes('housing') || searchTerm.includes('community development') || searchTerm.includes('regional planning') || searchTerm.includes('zoning') || searchTerm.includes('development regulations') || searchTerm.includes('transit systems') || searchTerm.includes('neighborhood development')) {
      if (courseCode.startsWith('usp') || courseDesc.includes('urban planning') || courseDesc.includes('planning') || courseDesc.includes('land use') || courseDesc.includes('transportation planning') || courseDesc.includes('environmental planning') || courseDesc.includes('housing') || courseDesc.includes('community development') || courseDesc.includes('regional planning') || courseDesc.includes('zoning') || courseDesc.includes('development regulations') || courseDesc.includes('transit systems') || courseDesc.includes('neighborhood development')) {
        return 0.6;
      }
    }

    // Public Policy & Administration
    if (searchTerm.includes('public policy') || searchTerm.includes('policy analysis') || searchTerm.includes('public administration') || searchTerm.includes('policy implementation') || searchTerm.includes('public budgeting') || searchTerm.includes('health policy') || searchTerm.includes('education policy') || searchTerm.includes('environmental policy') || searchTerm.includes('social policy') || searchTerm.includes('policy research') || searchTerm.includes('evidence-based policymaking') || searchTerm.includes('fiscal policy')) {
      if (courseCode.startsWith('poli') || courseDesc.includes('public policy') || courseDesc.includes('policy analysis') || courseDesc.includes('public administration') || courseDesc.includes('policy implementation') || courseDesc.includes('public budgeting') || courseDesc.includes('health policy') || courseDesc.includes('education policy') || courseDesc.includes('environmental policy') || courseDesc.includes('social policy') || courseDesc.includes('policy research') || courseDesc.includes('evidence-based policymaking') || courseDesc.includes('fiscal policy')) {
        return 0.6;
      }
    }

    // Public Health & Epidemiology
    if (searchTerm.includes('public health') || searchTerm.includes('epidemiology') || searchTerm.includes('biostatistics') || searchTerm.includes('health behavior') || searchTerm.includes('environmental health') || searchTerm.includes('health policy') || searchTerm.includes('global health') || searchTerm.includes('health communication') || searchTerm.includes('community health') || searchTerm.includes('health promotion') || searchTerm.includes('disease patterns') || searchTerm.includes('health systems')) {
      if (courseCode.startsWith('fmph') || courseDesc.includes('public health') || courseDesc.includes('epidemiology') || courseDesc.includes('biostatistics') || courseDesc.includes('health behavior') || courseDesc.includes('environmental health') || courseDesc.includes('health policy') || courseDesc.includes('global health') || courseDesc.includes('health communication') || courseDesc.includes('community health') || courseDesc.includes('health promotion') || courseDesc.includes('disease patterns') || courseDesc.includes('health systems')) {
        return 0.6;
      }
    }

    // Social Work & Human Services
    if (searchTerm.includes('social work') || searchTerm.includes('human behavior') || searchTerm.includes('social policy') || searchTerm.includes('child welfare') || searchTerm.includes('mental health') || searchTerm.includes('aging') || searchTerm.includes('gerontology') || searchTerm.includes('substance abuse') || searchTerm.includes('community organizing') || searchTerm.includes('case management') || searchTerm.includes('intervention methods') || searchTerm.includes('social services')) {
      if (courseCode.startsWith('socw') || courseDesc.includes('social work') || courseDesc.includes('human behavior') || courseDesc.includes('social policy') || courseDesc.includes('child welfare') || courseDesc.includes('mental health') || courseDesc.includes('aging') || courseDesc.includes('gerontology') || courseDesc.includes('substance abuse') || courseDesc.includes('community organizing') || courseDesc.includes('case management') || courseDesc.includes('intervention methods') || courseDesc.includes('social services')) {
        return 0.6;
      }
    }

    // Information Science & Technology
    if (searchTerm.includes('information science') || searchTerm.includes('information systems') || searchTerm.includes('data science') || searchTerm.includes('information retrieval') || searchTerm.includes('human-computer interaction') || searchTerm.includes('information ethics') || searchTerm.includes('digital libraries') || searchTerm.includes('information policy') || searchTerm.includes('knowledge management') || searchTerm.includes('information visualization') || searchTerm.includes('database management') || searchTerm.includes('user interface design')) {
      if (courseCode.startsWith('info') || courseDesc.includes('information science') || courseDesc.includes('information systems') || courseDesc.includes('data science') || courseDesc.includes('information retrieval') || courseDesc.includes('human-computer interaction') || courseDesc.includes('information ethics') || courseDesc.includes('digital libraries') || courseDesc.includes('information policy') || courseDesc.includes('knowledge management') || courseDesc.includes('information visualization') || courseDesc.includes('database management') || courseDesc.includes('user interface design')) {
        return 0.6;
      }
    }

    // Greek & Classical Languages
    if (searchTerm.includes('greek') || searchTerm.includes('ancient greek') || searchTerm.includes('classical greek') || searchTerm.includes('greek literature') || searchTerm.includes('greek philosophy') || searchTerm.includes('greek linguistics') || searchTerm.includes('greek translation')) {
      if (courseCode.startsWith('grk') || courseDesc.includes('greek') || courseDesc.includes('ancient greek') || courseDesc.includes('classical greek') || courseDesc.includes('greek literature') || courseDesc.includes('greek philosophy') || courseDesc.includes('greek linguistics') || courseDesc.includes('greek translation')) {
        return 0.6;
      }
    }

    // Sanskrit & Classical Languages
    if (searchTerm.includes('sanskrit') || searchTerm.includes('vedic') || searchTerm.includes('classical sanskrit') || searchTerm.includes('sanskrit literature') || searchTerm.includes('sanskrit linguistics') || searchTerm.includes('sanskrit translation')) {
      if (courseCode.startsWith('sans') || courseDesc.includes('sanskrit') || courseDesc.includes('vedic') || courseDesc.includes('classical sanskrit') || courseDesc.includes('sanskrit literature') || courseDesc.includes('sanskrit linguistics') || courseDesc.includes('sanskrit translation')) {
        return 0.6;
      }
    }

    // Astronomy & Space Science
    if (searchTerm.includes('astronomy') || searchTerm.includes('astrophysics') || searchTerm.includes('cosmology') || searchTerm.includes('solar system') || searchTerm.includes('stellar') || searchTerm.includes('galactic') || searchTerm.includes('exoplanets') || searchTerm.includes('observational astronomy') || searchTerm.includes('high energy astrophysics') || searchTerm.includes('astrobiology')) {
      if (courseCode.startsWith('astr') || courseDesc.includes('astronomy') || courseDesc.includes('astrophysics') || courseDesc.includes('cosmology') || courseDesc.includes('solar system') || courseDesc.includes('stellar') || courseDesc.includes('galactic') || courseDesc.includes('exoplanets') || courseDesc.includes('observational astronomy') || courseDesc.includes('high energy astrophysics') || courseDesc.includes('astrobiology')) {
        return 0.6;
      }
    }

    // Geology & Earth Sciences
    if (searchTerm.includes('geology') || searchTerm.includes('mineralogy') || searchTerm.includes('petrology') || searchTerm.includes('structural geology') || searchTerm.includes('sedimentology') || searchTerm.includes('paleontology') || searchTerm.includes('geochemistry') || searchTerm.includes('geophysics') || searchTerm.includes('volcanology') || searchTerm.includes('environmental geology')) {
      if (courseCode.startsWith('geol') || courseDesc.includes('geology') || courseDesc.includes('mineralogy') || courseDesc.includes('petrology') || courseDesc.includes('structural geology') || courseDesc.includes('sedimentology') || courseDesc.includes('paleontology') || courseDesc.includes('geochemistry') || courseDesc.includes('geophysics') || courseDesc.includes('volcanology') || courseDesc.includes('environmental geology')) {
        return 0.6;
      }
    }

    // Dance & Performance Arts
    if (searchTerm.includes('dance') || searchTerm.includes('ballet') || searchTerm.includes('modern dance') || searchTerm.includes('jazz dance') || searchTerm.includes('contemporary dance') || searchTerm.includes('choreography') || searchTerm.includes('dance history') || searchTerm.includes('dance theory') || searchTerm.includes('world dance') || searchTerm.includes('dance performance')) {
      if (courseCode.startsWith('danc') || courseDesc.includes('dance') || courseDesc.includes('ballet') || courseDesc.includes('modern dance') || courseDesc.includes('jazz dance') || courseDesc.includes('contemporary dance') || courseDesc.includes('choreography') || courseDesc.includes('dance history') || courseDesc.includes('dance theory') || courseDesc.includes('world dance') || courseDesc.includes('dance performance')) {
        return 0.6;
      }
    }

    // Creative Writing & Literature
    if (searchTerm.includes('creative writing') || searchTerm.includes('fiction writing') || searchTerm.includes('poetry writing') || searchTerm.includes('creative nonfiction') || searchTerm.includes('screenwriting') || searchTerm.includes('advanced fiction') || searchTerm.includes('advanced poetry') || searchTerm.includes('writing workshop') || searchTerm.includes('literary magazine') || searchTerm.includes('writing for digital media')) {
      if (courseCode.startsWith('crwr') || courseDesc.includes('creative writing') || courseDesc.includes('fiction writing') || courseDesc.includes('poetry writing') || courseDesc.includes('creative nonfiction') || courseDesc.includes('screenwriting') || courseDesc.includes('advanced fiction') || courseDesc.includes('advanced poetry') || courseDesc.includes('writing workshop') || courseDesc.includes('literary magazine') || courseDesc.includes('writing for digital media')) {
        return 0.6;
      }
    }

    // Criminal Justice & Law Enforcement
    if (searchTerm.includes('criminal justice') || searchTerm.includes('criminology') || searchTerm.includes('law enforcement') || searchTerm.includes('courts') || searchTerm.includes('judicial process') || searchTerm.includes('corrections') || searchTerm.includes('criminal law') || searchTerm.includes('juvenile justice') || searchTerm.includes('victimology') || searchTerm.includes('forensic science')) {
      if (courseCode.startsWith('crim') || courseDesc.includes('criminal justice') || courseDesc.includes('criminology') || courseDesc.includes('law enforcement') || courseDesc.includes('courts') || courseDesc.includes('judicial process') || courseDesc.includes('corrections') || courseDesc.includes('criminal law') || courseDesc.includes('juvenile justice') || courseDesc.includes('victimology') || courseDesc.includes('forensic science')) {
        return 0.6;
      }
    }

    // Gender Studies & Feminist Theory
    if (searchTerm.includes('gender studies') || searchTerm.includes('feminist theory') || searchTerm.includes('women history') || searchTerm.includes('masculinity studies') || searchTerm.includes('queer studies') || searchTerm.includes('gender and society') || searchTerm.includes('gender and media') || searchTerm.includes('gender and politics') || searchTerm.includes('gender and health') || searchTerm.includes('gender and work')) {
      if (courseCode.startsWith('gss') || courseDesc.includes('gender studies') || courseDesc.includes('feminist theory') || courseDesc.includes('women history') || courseDesc.includes('masculinity studies') || courseDesc.includes('queer studies') || courseDesc.includes('gender and society') || courseDesc.includes('gender and media') || courseDesc.includes('gender and politics') || courseDesc.includes('gender and health') || courseDesc.includes('gender and work')) {
        return 0.6;
      }
    }

    // Urban Studies & Urban Analysis
    if (searchTerm.includes('urban studies') || searchTerm.includes('urban sociology') || searchTerm.includes('urban economics') || searchTerm.includes('urban geography') || searchTerm.includes('urban politics') || searchTerm.includes('urban history') || searchTerm.includes('urban culture') || searchTerm.includes('urban environment') || searchTerm.includes('urban technology') || searchTerm.includes('urban research methods')) {
      if (courseCode.startsWith('usp') || courseDesc.includes('urban studies') || courseDesc.includes('urban sociology') || courseDesc.includes('urban economics') || courseDesc.includes('urban geography') || courseDesc.includes('urban politics') || courseDesc.includes('urban history') || courseDesc.includes('urban culture') || courseDesc.includes('urban environment') || courseDesc.includes('urban technology') || courseDesc.includes('urban research methods')) {
        return 0.6;
      }
    }

    // Public Administration & Government
    if (searchTerm.includes('public administration') || searchTerm.includes('public management') || searchTerm.includes('public budgeting') || searchTerm.includes('public personnel management') || searchTerm.includes('public policy analysis') || searchTerm.includes('nonprofit management') || searchTerm.includes('public sector ethics') || searchTerm.includes('public sector innovation') || searchTerm.includes('intergovernmental relations') || searchTerm.includes('public administration research')) {
      if (courseCode.startsWith('pa') || courseDesc.includes('public administration') || courseDesc.includes('public management') || courseDesc.includes('public budgeting') || courseDesc.includes('public personnel management') || courseDesc.includes('public policy analysis') || courseDesc.includes('nonprofit management') || courseDesc.includes('public sector ethics') || courseDesc.includes('public sector innovation') || courseDesc.includes('intergovernmental relations') || courseDesc.includes('public administration research')) {
        return 0.6;
      }
    }

    // Arabic & Middle Eastern Languages
    if (searchTerm.includes('arabic') || searchTerm.includes('modern arabic') || searchTerm.includes('classical arabic') || searchTerm.includes('arabic literature') || searchTerm.includes('arabic linguistics') || searchTerm.includes('arabic translation')) {
      if (courseCode.startsWith('arab') || courseDesc.includes('arabic') || courseDesc.includes('modern arabic') || courseDesc.includes('classical arabic') || courseDesc.includes('arabic literature') || courseDesc.includes('arabic linguistics') || courseDesc.includes('arabic translation')) {
        return 0.6;
      }
    }

    // Oceanography & Marine Science
    if (searchTerm.includes('oceanography') || searchTerm.includes('marine science') || searchTerm.includes('physical oceanography') || searchTerm.includes('chemical oceanography') || searchTerm.includes('biological oceanography') || searchTerm.includes('geological oceanography') || searchTerm.includes('marine ecology') || searchTerm.includes('ocean climate') || searchTerm.includes('marine conservation') || searchTerm.includes('ocean technology')) {
      if (courseCode.startsWith('ocea') || courseDesc.includes('oceanography') || courseDesc.includes('marine science') || courseDesc.includes('physical oceanography') || courseDesc.includes('chemical oceanography') || courseDesc.includes('biological oceanography') || courseDesc.includes('geological oceanography') || courseDesc.includes('marine ecology') || courseDesc.includes('ocean climate') || courseDesc.includes('marine conservation') || courseDesc.includes('ocean technology')) {
        return 0.6;
      }
    }

    // Meteorology & Atmospheric Science
    if (searchTerm.includes('meteorology') || searchTerm.includes('atmospheric science') || searchTerm.includes('atmospheric physics') || searchTerm.includes('weather analysis') || searchTerm.includes('climate science') || searchTerm.includes('atmospheric chemistry') || searchTerm.includes('weather forecasting') || searchTerm.includes('severe weather') || searchTerm.includes('atmospheric dynamics') || searchTerm.includes('meteorological instruments')) {
      if (courseCode.startsWith('metr') || courseDesc.includes('meteorology') || courseDesc.includes('atmospheric science') || courseDesc.includes('atmospheric physics') || courseDesc.includes('weather analysis') || courseDesc.includes('climate science') || courseDesc.includes('atmospheric chemistry') || courseDesc.includes('weather forecasting') || courseDesc.includes('severe weather') || courseDesc.includes('atmospheric dynamics') || courseDesc.includes('meteorological instruments')) {
        return 0.6;
      }
    }

    // Photography & Visual Arts
    if (searchTerm.includes('photography') || searchTerm.includes('digital photography') || searchTerm.includes('black and white photography') || searchTerm.includes('portrait photography') || searchTerm.includes('documentary photography') || searchTerm.includes('advanced photography') || searchTerm.includes('photojournalism') || searchTerm.includes('commercial photography') || searchTerm.includes('photographic history') || searchTerm.includes('photographic theory')) {
      if (courseCode.startsWith('phot') || courseDesc.includes('photography') || courseDesc.includes('digital photography') || courseDesc.includes('black and white photography') || courseDesc.includes('portrait photography') || courseDesc.includes('documentary photography') || courseDesc.includes('advanced photography') || courseDesc.includes('photojournalism') || courseDesc.includes('commercial photography') || courseDesc.includes('photographic history') || courseDesc.includes('photographic theory')) {
        return 0.6;
      }
    }

    // Sculpture & 3D Arts
    if (searchTerm.includes('sculpture') || searchTerm.includes('clay sculpture') || searchTerm.includes('metal sculpture') || searchTerm.includes('wood sculpture') || searchTerm.includes('mixed media sculpture') || searchTerm.includes('advanced sculpture') || searchTerm.includes('installation art') || searchTerm.includes('public art') || searchTerm.includes('sculptural history') || searchTerm.includes('sculptural theory')) {
      if (courseCode.startsWith('scul') || courseDesc.includes('sculpture') || courseDesc.includes('clay sculpture') || courseDesc.includes('metal sculpture') || courseDesc.includes('wood sculpture') || courseDesc.includes('mixed media sculpture') || courseDesc.includes('advanced sculpture') || courseDesc.includes('installation art') || courseDesc.includes('public art') || courseDesc.includes('sculptural history') || courseDesc.includes('sculptural theory')) {
        return 0.6;
      }
    }

    // Education & Teaching
    if (searchTerm.includes('education') || searchTerm.includes('educational psychology') || searchTerm.includes('curriculum development') || searchTerm.includes('teaching methods') || searchTerm.includes('educational assessment') || searchTerm.includes('special education') || searchTerm.includes('educational technology') || searchTerm.includes('educational leadership') || searchTerm.includes('educational research') || searchTerm.includes('educational policy')) {
      if (courseCode.startsWith('eds') || courseDesc.includes('education') || courseDesc.includes('educational psychology') || courseDesc.includes('curriculum development') || courseDesc.includes('teaching methods') || courseDesc.includes('educational assessment') || courseDesc.includes('special education') || courseDesc.includes('educational technology') || courseDesc.includes('educational leadership') || courseDesc.includes('educational research') || courseDesc.includes('educational policy')) {
        return 0.6;
      }
    }

    // Nursing & Healthcare
    if (searchTerm.includes('nursing') || searchTerm.includes('nursing fundamentals') || searchTerm.includes('health assessment') || searchTerm.includes('nursing pharmacology') || searchTerm.includes('medical-surgical nursing') || searchTerm.includes('pediatric nursing') || searchTerm.includes('mental health nursing') || searchTerm.includes('community health nursing') || searchTerm.includes('nursing research') || searchTerm.includes('nursing leadership')) {
      if (courseCode.startsWith('nurs') || courseDesc.includes('nursing') || courseDesc.includes('nursing fundamentals') || courseDesc.includes('health assessment') || courseDesc.includes('nursing pharmacology') || courseDesc.includes('medical-surgical nursing') || courseDesc.includes('pediatric nursing') || courseDesc.includes('mental health nursing') || courseDesc.includes('community health nursing') || courseDesc.includes('nursing research') || courseDesc.includes('nursing leadership')) {
        return 0.6;
      }
    }

    // Nutrition & Food Science
    if (searchTerm.includes('nutrition') || searchTerm.includes('human nutrition') || searchTerm.includes('clinical nutrition') || searchTerm.includes('community nutrition') || searchTerm.includes('sports nutrition') || searchTerm.includes('nutritional biochemistry') || searchTerm.includes('food science') || searchTerm.includes('nutritional epidemiology') || searchTerm.includes('nutritional counseling') || searchTerm.includes('nutritional policy')) {
      if (courseCode.startsWith('nutr') || courseDesc.includes('nutrition') || courseDesc.includes('human nutrition') || courseDesc.includes('clinical nutrition') || courseDesc.includes('community nutrition') || courseDesc.includes('sports nutrition') || courseDesc.includes('nutritional biochemistry') || courseDesc.includes('food science') || courseDesc.includes('nutritional epidemiology') || courseDesc.includes('nutritional counseling') || courseDesc.includes('nutritional policy')) {
        return 0.6;
      }
    }

    // Kinesiology & Exercise Science
    if (searchTerm.includes('kinesiology') || searchTerm.includes('exercise physiology') || searchTerm.includes('biomechanics') || searchTerm.includes('motor learning') || searchTerm.includes('sports psychology') || searchTerm.includes('physical education') || searchTerm.includes('athletic training') || searchTerm.includes('fitness and wellness') || searchTerm.includes('adapted physical education') || searchTerm.includes('kinesiology research')) {
      if (courseCode.startsWith('kine') || courseDesc.includes('kinesiology') || courseDesc.includes('exercise physiology') || courseDesc.includes('biomechanics') || courseDesc.includes('motor learning') || courseDesc.includes('sports psychology') || courseDesc.includes('physical education') || courseDesc.includes('athletic training') || courseDesc.includes('fitness and wellness') || courseDesc.includes('adapted physical education') || courseDesc.includes('kinesiology research')) {
        return 0.6;
      }
    }

    // Environmental Science & Sustainability
    if (searchTerm.includes('environmental science') || searchTerm.includes('environmental chemistry') || searchTerm.includes('environmental biology') || searchTerm.includes('environmental policy') || searchTerm.includes('environmental economics') || searchTerm.includes('climate change') || searchTerm.includes('sustainability') || searchTerm.includes('environmental toxicology') || searchTerm.includes('environmental monitoring') || searchTerm.includes('environmental research')) {
      if (courseCode.startsWith('envs') || courseDesc.includes('environmental science') || courseDesc.includes('environmental chemistry') || courseDesc.includes('environmental biology') || courseDesc.includes('environmental policy') || courseDesc.includes('environmental economics') || courseDesc.includes('climate change') || courseDesc.includes('sustainability') || courseDesc.includes('environmental toxicology') || courseDesc.includes('environmental monitoring') || courseDesc.includes('environmental research')) {
        return 0.6;
      }
    }

    // Turkish & Middle Eastern Languages
    if (searchTerm.includes('turkish') || searchTerm.includes('modern turkish') || searchTerm.includes('ottoman turkish') || searchTerm.includes('turkish literature') || searchTerm.includes('turkish linguistics') || searchTerm.includes('turkish translation')) {
      if (courseCode.startsWith('turk') || courseDesc.includes('turkish') || courseDesc.includes('modern turkish') || courseDesc.includes('ottoman turkish') || courseDesc.includes('turkish literature') || courseDesc.includes('turkish linguistics') || courseDesc.includes('turkish translation')) {
        return 0.6;
      }
    }

    // Hindi & South Asian Languages
    if (searchTerm.includes('hindi') || searchTerm.includes('modern hindi') || searchTerm.includes('classical hindi') || searchTerm.includes('hindi literature') || searchTerm.includes('hindi linguistics') || searchTerm.includes('hindi translation')) {
      if (courseCode.startsWith('hind') || courseDesc.includes('hindi') || courseDesc.includes('modern hindi') || courseDesc.includes('classical hindi') || courseDesc.includes('hindi literature') || courseDesc.includes('hindi linguistics') || courseDesc.includes('hindi translation')) {
        return 0.6;
      }
    }

    // Botany & Plant Sciences
    if (searchTerm.includes('botany') || searchTerm.includes('plant anatomy') || searchTerm.includes('plant physiology') || searchTerm.includes('plant taxonomy') || searchTerm.includes('plant ecology') || searchTerm.includes('plant genetics') || searchTerm.includes('plant pathology') || searchTerm.includes('plant evolution') || searchTerm.includes('plant biotechnology') || searchTerm.includes('plant conservation')) {
      if (courseCode.startsWith('bot') || courseDesc.includes('botany') || courseDesc.includes('plant anatomy') || courseDesc.includes('plant physiology') || courseDesc.includes('plant taxonomy') || courseDesc.includes('plant ecology') || courseDesc.includes('plant genetics') || courseDesc.includes('plant pathology') || courseDesc.includes('plant evolution') || courseDesc.includes('plant biotechnology') || courseDesc.includes('plant conservation')) {
        return 0.6;
      }
    }

    // Zoology & Animal Sciences
    if (searchTerm.includes('zoology') || searchTerm.includes('animal anatomy') || searchTerm.includes('animal physiology') || searchTerm.includes('animal taxonomy') || searchTerm.includes('animal ecology') || searchTerm.includes('animal behavior') || searchTerm.includes('animal genetics') || searchTerm.includes('animal evolution') || searchTerm.includes('animal conservation') || searchTerm.includes('animal research')) {
      if (courseCode.startsWith('zool') || courseDesc.includes('zoology') || courseDesc.includes('animal anatomy') || courseDesc.includes('animal physiology') || courseDesc.includes('animal taxonomy') || courseDesc.includes('animal ecology') || courseDesc.includes('animal behavior') || courseDesc.includes('animal genetics') || courseDesc.includes('animal evolution') || courseDesc.includes('animal conservation') || courseDesc.includes('animal research')) {
        return 0.6;
      }
    }

    // Graphic Design & Visual Communication
    if (searchTerm.includes('graphic design') || searchTerm.includes('typography') || searchTerm.includes('digital design') || searchTerm.includes('brand design') || searchTerm.includes('web design') || searchTerm.includes('advanced graphic design') || searchTerm.includes('design history') || searchTerm.includes('design theory') || searchTerm.includes('design portfolio') || searchTerm.includes('design research')) {
      if (courseCode.startsWith('desn') || courseDesc.includes('graphic design') || courseDesc.includes('typography') || courseDesc.includes('digital design') || courseDesc.includes('brand design') || courseDesc.includes('web design') || courseDesc.includes('advanced graphic design') || courseDesc.includes('design history') || courseDesc.includes('design theory') || courseDesc.includes('design portfolio') || courseDesc.includes('design research')) {
        return 0.6;
      }
    }

    // Animation & Motion Graphics
    if (searchTerm.includes('animation') || searchTerm.includes('2d animation') || searchTerm.includes('3d animation') || searchTerm.includes('character animation') || searchTerm.includes('storyboarding') || searchTerm.includes('advanced animation') || searchTerm.includes('animation history') || searchTerm.includes('animation theory') || searchTerm.includes('animation production') || searchTerm.includes('animation portfolio')) {
      if (courseCode.startsWith('anim') || courseDesc.includes('animation') || courseDesc.includes('2d animation') || courseDesc.includes('3d animation') || courseDesc.includes('character animation') || courseDesc.includes('storyboarding') || courseDesc.includes('advanced animation') || courseDesc.includes('animation history') || courseDesc.includes('animation theory') || courseDesc.includes('animation production') || courseDesc.includes('animation portfolio')) {
        return 0.6;
      }
    }

    // Journalism & Media
    if (searchTerm.includes('journalism') || searchTerm.includes('news writing') || searchTerm.includes('feature writing') || searchTerm.includes('investigative journalism') || searchTerm.includes('digital journalism') || searchTerm.includes('broadcast journalism') || searchTerm.includes('photojournalism') || searchTerm.includes('media law') || searchTerm.includes('journalism ethics') || searchTerm.includes('journalism research')) {
      if (courseCode.startsWith('jour') || courseDesc.includes('journalism') || courseDesc.includes('news writing') || courseDesc.includes('feature writing') || courseDesc.includes('investigative journalism') || courseDesc.includes('digital journalism') || courseDesc.includes('broadcast journalism') || courseDesc.includes('photojournalism') || courseDesc.includes('media law') || courseDesc.includes('journalism ethics') || courseDesc.includes('journalism research')) {
        return 0.6;
      }
    }

    // Hospitality & Tourism Management
    if (searchTerm.includes('hospitality management') || searchTerm.includes('hotel management') || searchTerm.includes('restaurant management') || searchTerm.includes('event management') || searchTerm.includes('tourism management') || searchTerm.includes('hospitality marketing') || searchTerm.includes('hospitality finance') || searchTerm.includes('hospitality law') || searchTerm.includes('customer service') || searchTerm.includes('hospitality technology')) {
      if (courseCode.startsWith('hosp') || courseDesc.includes('hospitality management') || courseDesc.includes('hotel management') || courseDesc.includes('restaurant management') || courseDesc.includes('event management') || courseDesc.includes('tourism management') || courseDesc.includes('hospitality marketing') || courseDesc.includes('hospitality finance') || courseDesc.includes('hospitality law') || courseDesc.includes('customer service') || courseDesc.includes('hospitality technology')) {
        return 0.6;
      }
    }

    // Fashion Design & Textiles
    if (searchTerm.includes('fashion design') || searchTerm.includes('fashion drawing') || searchTerm.includes('pattern making') || searchTerm.includes('fashion history') || searchTerm.includes('textile design') || searchTerm.includes('advanced fashion design') || searchTerm.includes('fashion marketing') || searchTerm.includes('fashion merchandising') || searchTerm.includes('sustainable fashion') || searchTerm.includes('fashion portfolio')) {
      if (courseCode.startsWith('fash') || courseDesc.includes('fashion design') || courseDesc.includes('fashion drawing') || courseDesc.includes('pattern making') || courseDesc.includes('fashion history') || courseDesc.includes('textile design') || courseDesc.includes('advanced fashion design') || courseDesc.includes('fashion marketing') || courseDesc.includes('fashion merchandising') || courseDesc.includes('sustainable fashion') || courseDesc.includes('fashion portfolio')) {
        return 0.6;
      }
    }

    // Interior Design & Space Planning
    if (searchTerm.includes('interior design') || searchTerm.includes('space planning') || searchTerm.includes('interior materials') || searchTerm.includes('interior lighting') || searchTerm.includes('furniture design') || searchTerm.includes('advanced interior design') || searchTerm.includes('interior design history') || searchTerm.includes('sustainable design') || searchTerm.includes('commercial design') || searchTerm.includes('interior design portfolio')) {
      if (courseCode.startsWith('intd') || courseDesc.includes('interior design') || courseDesc.includes('space planning') || courseDesc.includes('interior materials') || courseDesc.includes('interior lighting') || courseDesc.includes('furniture design') || courseDesc.includes('advanced interior design') || courseDesc.includes('interior design history') || courseDesc.includes('sustainable design') || courseDesc.includes('commercial design') || courseDesc.includes('interior design portfolio')) {
        return 0.6;
      }
    }

    return 0;
  }

  // Get similar courses based on a course
  async getSimilarCourses(courseId: string): Promise<Course[]> {
    try {
      // Skip similar courses for now since backend isn't deployed
      console.log("Skipping similar courses - backend not deployed");
      return [];
    } catch (error) {
      console.error("Similar courses error:", error);
      return [];
    }
  }

  // Get personalized recommendations based on user interests
  async getPersonalizedRecommendations(
    interests: string[]
  ): Promise<AIRecommendation[]> {
    try {
      // Skip personalized recommendations for now since backend isn't deployed
      console.log("Skipping personalized recommendations - backend not deployed");
      return [];
    } catch (error) {
      console.error("Personalized recommendations error:", error);
      return [];
    }
  }

  // Fallback to mock data if backend is not available
  getMockRecommendations(query: string): AIRecommendation[] {
    return this.searchCourseDatabase(query);
  }
}

export const aiService = new AIService();
