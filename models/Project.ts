class Project {
  name: string;
  images: [string];
  yearOfConstruction: number;
  description: string;
  video: string;
  teammates: [string];
  designPhilosophy: string;
  category: string;

  constructor(
    prjName: string,
    prjImages: [string],
    prjYearOfConstruction: number,
    prjDescription: string,
    prjVideo: string,
    prjTeammates: [string],
    prjDesignPhilosophy: string,
    prjCategory: string
  ) {
    this.name = prjName;
    this.images = prjImages;
    this.yearOfConstruction = prjYearOfConstruction;
    this.description = prjDescription;
    this.video = prjVideo;
    this.teammates = prjTeammates;
    this.designPhilosophy = prjDesignPhilosophy;
    this.category = prjCategory;
  }
}

export default Project;
