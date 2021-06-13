export interface Tag {
    id: string;
    name: string;
    description?: string;
    slug: string;
}

export interface Question {
    id: string;
    tagId: string;
    question: string;
    answer: string;
    votesUp: number;
    votesDown: number;
}
