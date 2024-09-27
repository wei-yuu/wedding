export interface Story {
  year: string;
  month: string;
  title: string;
  description?: string;
  photo?: string;
  majorEvent: boolean;
  color: string;
}

export interface DriveFile {
  id: string;
  kind: string;
  mimeType: string;
  name: string;
}
