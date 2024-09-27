export enum FormKey {
  friendship = 'entry.1989128734',
  name = 'entry.83188872',
  phone = 'entry.685352363',
  relationship = 'entry.12693519',
  attend = 'entry.239572116',
  attendance = 'entry.479308312',
  childSeat = 'entry.1066109351',
  childSeatNumber = 'entry.1243535652',
  eatingHabits = 'entry.1074705634',
  invitationType = 'entry.1925531322',
  address = 'entry.707750234',
  email = 'entry.1970927110',
  message = 'entry.1597428855',
}

export type GoogleForm = Partial<Record<FormKey, string>>;
