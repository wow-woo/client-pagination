import { JsxEmit } from "typescript";

export interface PostProps {
    userId:number;
    id:number;
    title:string;
    body:string;
}
export function Post ({data}:{data : PostProps}) {
    const { id, title, body }:PostProps = data;

    return (
        <div>
            <small>{id}</small>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}