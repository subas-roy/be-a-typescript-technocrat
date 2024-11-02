{
  // interface - generic

  interface Developer<T, X = null> {
    name: string
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    }
    smartWatch: T;
    bike?: X
  }
  // type
  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  }

  const poorDeveloper: Developer<EmilabWatch> = {
    name: 'Subas',
    computer: {
      brand: 'Lonevo',
      model: 'X-120',
      releaseYear: 2012
    },
    smartWatch: {
      brand: 'Emilab',
      model: 'kw-66',
      display: 'OLED'
    }
  }
  // interface
  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean 
  }
  interface YamahaBike {
    model: string;
    engineCapacity: string
  }
  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: 'Rich Dev',
    computer: {
      brand: 'HP',
      model: 'X-25UR',
      releaseYear: 2018
    },
    smartWatch: {
      brand: 'Apple Watch',
      model: 'Something',
      heartTrack: true,
      sleepTrack: true
    },
    bike: {
      model: 'Yamaha',
      engineCapacity: '100cc'
    }
  }



//

}