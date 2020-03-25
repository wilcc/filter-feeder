const {
  isOdd,
  onlyOdds,
  isEven,
  onlyEvens,
  isShort,
  shortNamesOnly,
  isDName,
  dNames,
  containsLowercase,
  removeTrolls,
  isTriStateArea,
  triStateAreaOnly,
} = require('./main.js')


describe('isOdd', () => {
  it(`given a number, returns whether that number is odd`, () => {
    expect(isOdd(5)).toBe(true);
    expect(isOdd(6)).toBe(false);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(107)).toBe(true);
  })
})

describe('onlyOdds', () => {
  it(`given an array of numbers, returns an array with only those numbers that are odd`, () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [5, 101, 0, 7];
    expect(onlyOdds(nums1)).toEqual([1, 3]);
    expect(onlyOdds([5, 101, 0, 7])).toEqual([5, 101, 7]);
  })

  it(`does not modify the original array`, () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [5, 101, 0, 7];
    const original1 = [1, 2, 3, 4];
    const original2 = [5, 101, 0, 7];
    onlyOdds(nums1);
    onlyOdds(nums2);
    expect(nums1).toEqual(original1);
    expect(nums2).toEqual(original2);
  });
})

describe('isEven', () => {
  it(`given a number, returns whether that number is even`, () => {
    expect(isEven(5)).toBe(false);
    expect(isEven(6)).toBe(true);
    expect(isEven(2)).toBe(true);
    expect(isEven(107)).toBe(false);
  })
})

describe('onlyEvens', () => {
  it(`given an array of numbers, returns an array with only those numbers that are even`, () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [5, 101, 0, 7];
    expect(onlyEvens(nums1)).toEqual([2, 4]);
    expect(onlyEvens([5, 101, 0, 7])).toEqual([0]);
  })

  it(`does not modify the original array`, () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [5, 101, 0, 7];
    const original1 = [1, 2, 3, 4];
    const original2 = [5, 101, 0, 7];
    onlyEvens(nums1);
    onlyEvens(nums2);
    expect(nums1).toEqual(original1);
    expect(nums2).toEqual(original2);
  });
})

describe('isShort', () => {
  it(`returns whether the given string is less than 7 characters`, () => {
    expect(isShort('shorty')).toBe(true);
    expect(isShort('yep')).toBe(true);
    expect(isShort('hey you')).toBe(false);
    expect(isShort('hello!!')).toBe(false);
    expect(isShort('longy mclongerson')).toBe(false);
    expect(isShort('what even can you mean')).toBe(false);
  })
})

describe('shortNamesOnly', () => {
  it(`given an array of names, returns only those that are fewer than 7 characters long`, () => {
    const names1 = [
      'Colin',
      'Mesuara',
      'Bogdan',
      'David',
      'Patrick',
      'Marc',
      'Michael',
      'Sharod',
    ];

    const shortNames1 = [
      'Colin',
      'Bogdan',
      'David',
      'Marc',
      'Sharod',
    ];

    const names2 = [
      'LaToddra',
      'Deaundre',
      'Denis',
      'Tyrell',
      'Wilson',
      'Carlos',
      'Jumary',
    ];

    const shortNames2 = [
      'Denis',
      'Tyrell',
      'Wilson',
      'Carlos',
      'Jumary',
    ];


    expect(shortNamesOnly(names1)).toEqual(shortNames1);
    expect(shortNamesOnly(names2)).toEqual(shortNames2);
  })

  it(`does not modify the original array`, () => {
    const names1 = [
      'Colin',
      'Mesuara',
      'Bogdan',
      'David',
      'Patrick',
      'Marc',
      'Michael',
      'Sharod',
    ];

    const original1 = [
      'Colin',
      'Mesuara',
      'Bogdan',
      'David',
      'Patrick',
      'Marc',
      'Michael',
      'Sharod',
    ];

    const names2 = [
      'LaToddra',
      'Deaundre',
      'Denis',
      'Carlos',
      'Tyrell',
      'Wilson',
      'Jumary',
    ];

    const original2 = [
      'LaToddra',
      'Deaundre',
      'Denis',
      'Carlos',
      'Tyrell',
      'Wilson',
      'Jumary',
    ];

    shortNamesOnly(names1);
    shortNamesOnly(names2);
    expect(names1).toEqual(original1);
    expect(names2).toEqual(original2);
  });
});

describe('isDName', () => {
  it(`returns whether or not the name starts with 'D'`, () => {
    expect(isDName('Colin')).toBe(false)
    expect(isDName('Genghis')).toBe(false)
    expect(isDName('Mesuara')).toBe(false)
    expect(isDName('Denis')).toBe(true)
    expect(isDName('David')).toBe(true)
    expect(isDName('DeAundre')).toBe(true)
  })
})

describe('dNames', () => {
  it(`returns only the names that begin with d`, () => {
    const names1 = [
      'Colin',
      'Mesuara',
      'Bogdan',
      'David',
      'Patrick',
      'Marc',
      'Michael',
      'Sharod',
    ];

    const dNames1 = [
      'David',
    ];

    const names2 = [
      'LaToddra',
      'Deaundre',
      'Denis',
      'Carlos',
      'Tyrell',
      'Wilson',
      'Jumary',
    ];

    const dNames2 = [
      'Deaundre',
      'Denis',
    ];
    
    expect(dNames(names1)).toEqual(dNames1);
    expect(dNames(names2)).toEqual(dNames2);
  });

  it(`does not modify the original array`, () => {
    const names1 = [
      'Colin',
      'Mesuara',
      'Bogdan',
      'David',
      'Patrick',
      'Marc',
      'Michael',
      'Sharod',
    ];

    const original1 = [
      'Colin',
      'Mesuara',
      'Bogdan',
      'David',
      'Patrick',
      'Marc',
      'Michael',
      'Sharod',
    ];

    const names2 = [
      'LaToddra',
      'Deaundre',
      'Denis',
      'Carlos',
      'Tyrell',
      'Wilson',
      'Jumary',
    ];

    const original2 = [
      'LaToddra',
      'Deaundre',
      'Denis',
      'Carlos',
      'Tyrell',
      'Wilson',
      'Jumary',
    ];

    dNames(names1);
    dNames(names2);
    expect(names1).toEqual(original1);
    expect(names2).toEqual(original2);
  });
});

describe('containsLowercase', () => {
  it(`can determine that a string with only lowercase characters contains at least one lowercase character`, () => {
    expect(containsLowercase('a')).toBe(true);
    expect(containsLowercase('ab')).toBe(true);
    expect(containsLowercase('dki')).toBe(true);
    expect(containsLowercase('weiorusd')).toBe(true);
  })
  
  it(`can determine that a string with only uppercase letters does not contain any lowercase characters`, () => {
    expect(containsLowercase('AB')).toBe(false);
    expect(containsLowercase('HELLO')).toBe(false);
    expect(containsLowercase('WORDSAMIRITE')).toBe(false);
  })

  it(`can determine that a string that contains some lowercase letters and some uppercase does contain a lowercase letter`, () => {
    expect(containsLowercase('abC')).toBe(true);
    expect(containsLowercase('KDab')).toBe(true);
    expect(containsLowercase('KWJabWI')).toBe(true);
    expect(containsLowercase('aBc')).toBe(true);
  })
  
  it(`can determine that a string that contains some lowercase letters and some non-letters does contain a lowercase letter`, () => {
    expect(containsLowercase('hello my good friends')).toBe(true);
    expect(containsLowercase('I hate this @#(%')).toBe(true);
    expect(containsLowercase('what even is this')).toBe(true);
    expect(containsLowercase('what!')).toBe(true);
  })
  
  it(`can determine that an empty string does not contain a lowercase letter`, () => {
    expect(containsLowercase('')).toBe(false);
  })
});

describe('removeTrolls', () => {
  it(`given an array of strings representing user posts, it returns an array of those posts that have at least one lower case letter`, () => {
    const posts1 = [
      'I AM ANGRY ABOUT POLITICS!!',
      `I'm kind of annoyed.`,
      `You know what sucks?
      EVERYTHING.`,
      `wat`,
      `RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGE`,
    ];

    const acceptablePosts1 = [
      `I'm kind of annoyed.`,
      `You know what sucks?
      EVERYTHING.`,
      `wat`,
    ];

    const posts2 = [
      'a/s/l',
      `FIRST`,
      `BY THOR'S HAMMER!!`,
    ];

    const acceptablePosts2 = [
      'a/s/l',
    ];

    expect(removeTrolls(posts1)).toEqual(acceptablePosts1);
    expect(removeTrolls(posts2)).toEqual(acceptablePosts2);
  })
})

describe('isTriStateArea', () => {
  it(`given a string, returns whether it ends in "NY" or "NJ" or "CT"`, () => {
    expect(isTriStateArea('Smalltown, CT')).toBe(true);
    expect(isTriStateArea('Queens, NY')).toBe(true);
    expect(isTriStateArea('Milford, NJ')).toBe(true);
    expect(isTriStateArea('Las Vegas, NV')).toBe(false);
    expect(isTriStateArea('San Francisco, CA')).toBe(false);
    expect(isTriStateArea('Portland, OR')).toBe(false);
  })
})

describe('triStateAreaOnly', () => {
  it(`given an array of strings, returns an array of only those strings that end in "NY" or "NJ" or "CT"`, () => {
    const cities1 = [
      'Brooklyn, NY',
      'Stamford, CT',
      'Boston, MA',
      'Buffalo, NY',
      'Los Angeles, CA',
    ];

    const triState1 = [
      'Brooklyn, NY',
      'Stamford, CT',
      'Buffalo, NY',
    ];

    const cities2 = [
      'Reno, NV',
      'Cranford, NJ',
      'Dover, VT',
    ];

    const triState2 = [
      'Cranford, NJ',
    ];

    expect(triStateAreaOnly(cities1)).toEqual(triState1);
    expect(triStateAreaOnly(cities2)).toEqual(triState2);
  })
})
