export interface ChildSeat {
  value: string;
  childSeatNumber?: number;
}

export interface InvitationType {
  value: string;
  address?: string;
  email?: string;
}

export interface Form {
  name: string;
  phone: string;
  friendship: string;
  relationship: string;
  attend: string;
  attendance: string;
  childSeat: ChildSeat;
  eatingHabits: string;
  invitationType: InvitationType;
  message: string;
  thx: string;
}
