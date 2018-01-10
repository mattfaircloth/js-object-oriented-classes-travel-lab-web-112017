class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    let year = this.startDate.getFullYear()
    return endDate - year;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
     // let hor = {};
     // for (let i = 0; i < eastWest.length; i++) {
     //   hor[eastWest[i]] = i;
     // }
     let verticalBlocks = this.endingLocation.vertical - this.beginningLocation.vertical;
     let horizontalBlocks = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
     return verticalBlocks + horizontalBlocks;
  }

  estimatedTime(isPeak = false) {
    if (isPeak === true) {
      return (this.blocksTravelled() / 2);
    } else {
      return (this.blocksTravelled() / 3);
    }
  }


}
