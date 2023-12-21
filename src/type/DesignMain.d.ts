// 模板的Props
export type TempContainerProps = {
    id: number
}

// image[]的type
export type ImageInfoType = File | string;

// 文章的props
export type form = {
    title?: string;
    content?: string;
    image?: File;
    url?: string;
};

// 存在後端的東西
export type StorageComponentsType = {
    id: number;
    type: string;
    title?: string;
    content?: string;
    images?: string[];
    url?: string[];
    forms?: form[];
    image?: string;
    bg?: string;
}

// 編輯模式components[]的type
export type ComponentInfoType = {
    component: FC;
    id: number;
    type: string;
    title?: string;
    content?: string;
    images?: ImageInfoType[];
    url?: string[];
    forms?: form[];
    image?: File | string;
    bg?: File | string;
};
