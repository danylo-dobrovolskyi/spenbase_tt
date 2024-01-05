type FileType = "folder" | "file";

export interface FileSystem {
  id: string;
  name: string;
  data?: string;
  type: FileType;
  children?: FileSystem[];
}
