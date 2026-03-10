
export interface CountrySlide {
  id: string;
  tag: string;
  title: string[];
  desc: string;
  bgImg: string;
  cta: string;
  accent: string;
  theme: string;
}

export interface CountryInfo {
  admissions: {
    intakes: { period: string; details: string; color: string }[];
    requirements: string[];
  };
  visa: {
    type: string;
    details: string;
    psw: string;
    workRights: string;
  };
  costs: {
    tuition: { level: string; range: string }[];
    living: { area: string; amount: string; color: string }[];
  };
  scholarships: { name: string; desc: string; value: string; bg: string }[];
}

export interface RecommendationRequest {
  background: string;
  interest: string;
  budget: string;
  preferredCountries: string[];
}

export interface RecommendationResponse {
  advice: string;
  topDestinations: {
    country: string;
    reason: string;
  }[];
  suggestedCourses: {
    course: string;
    universities: string[];
  }[];
}
