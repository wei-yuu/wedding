export interface Story {
  year: string;
  month: string;
  title: string;
  content?: string;
  photo?: string;
}

export interface DriveFile {
  id: string;
  kind: string;
  mimeType: string;
  name: string;
}
