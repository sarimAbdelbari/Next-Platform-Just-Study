// lib/store/fileStore.ts
import { create } from "zustand";

interface File {
  id: string;
  name: string;
  key: string;
  createdAt: Date;
}

interface FileStore {
  files: File[];
  setFiles: (files: File[]) => void;
  deleteFile: (id: string) => void;
}

export const useFileStore = create<FileStore>((set) => ({
  files: [],
  setFiles: (files) => set({ files }),
  deleteFile: (id) =>
    set((state) => ({
      files: state.files.filter((file) => file.id !== id),
    })),
}));