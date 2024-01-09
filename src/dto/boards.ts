// 게시글 생성
export type PostBoardRequestDto = {
  title: string;
  contents: string;
  images: string[];
};

// 게시글 수정
export type PatchBoardRequestDto = {
  title: string;
  contents: string;
  images: string[];
};
