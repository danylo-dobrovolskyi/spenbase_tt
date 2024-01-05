import { observable, action, computed, makeAutoObservable } from 'mobx';
import { FileSystem } from '../types/structure';

class FileSystemStore {
  @observable fileSystem: FileSystem[] = [];
  @observable searchQuery: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  @action setFileSystem(data: FileSystem[]) {
    this.fileSystem = data;
  }

  @action setSearchQuery(query: string) {
    this.searchQuery = query;
  }

  @computed get filteredFileSystem(): FileSystem[] {
    if (!this.searchQuery) {
      return this.fileSystem;
    }

    return this.fileSystem;
  }
}

export const fileSystemStore = new FileSystemStore();