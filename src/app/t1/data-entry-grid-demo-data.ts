export class SkyAgGridDemoRow {
  public firstName: string | undefined;
  public lastName: string | undefined;
  public contactNo: number | undefined;
  public email: string | undefined;
  public birthDay: Date | undefined;
  public address : string | undefined;
}

export const SKY_AG_GRID_DEMO_DATA = [
  {
    firstName: 'Billy',
    lastName: 'Bob',
    contactNo: 1234567890,
    email: 'billy.bob@test.com',
    birthDay: new Date('12/1/1994'),
    address: 'Street test 1'
  },
  {
    firstName: 'Jane',
    lastName: 'Deere',
    contactNo: 1234567890,
    email: 'jane.deere@test.com',
    birthDay: new Date('7/15/2009'),
    address: 'Street test 2'
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    contactNo: 1234567890,
    email: 'john.doe@test.com',
    birthDay: new Date('9/1/2017'),
    address: 'Street test 3'
  },
  {
    firstName: 'David',
    lastName: 'Doe',
    contactNo: 1234567890,
    email: 'David.Smith@test.com',
    birthDay: new Date('1/1/2012'),
    address: 'Street test 4'
  },
  {
    firstName: 'Emily',
    lastName: 'Johnson',
    contactNo: 1234567890,
    email: 'Emily.Johnson@test.com',
    birthDay: new Date('1/15/2014'),
    address: 'Street test 5'
  },
  {
    firstName: 'Nicole',
    lastName: 'Davidson',
    contactNo: 1234567890,
    email: 'Nicole.Davidson@test.com',
    birthDay: new Date('11/1/2019'),
    address: 'Street test 6'
  },
  {
    firstName: 'Carl',
    lastName: 'Roberts',
    contactNo: 1234567890,
    email: 'Carl.Roberts@test.com',
    birthDay: new Date('11/1/2019'),
    address: 'Street test 7'
  }
];
