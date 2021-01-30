import { useState } from "react";
import { Post, PostProps } from './Post'

interface PaginationProps {
    data:PostProps[];
    title:string;
    pageLimit:number;
    dataLimit:number
}
export function Pagination({data,  title, pageLimit, dataLimit}: PaginationProps) {
    const PAGES = Math.round(data.length / dataLimit)
    const [page, setPage] = useState(1)

    const goToPrev =()=>{
        page === 1 ? setPage(PAGES) : setPage(page-1);
    }
    const goToNext =()=>{
        page === PAGES ? setPage(1) :  setPage(page+1)
    }
    const selectPage =(e:any)=>{
        const page = parseInt(e.target.textContent)
        setPage(page)
    };
    const getPageData = ()=>{
        const start = (page * dataLimit) - dataLimit;
        const end = start + dataLimit;
        window.scrollTo({behavior:'smooth', top:0})
        return data.slice(start, end)
    }
    const getPagination = ()=>{
        const first = Math.floor((page-1) / pageLimit) * pageLimit
        return new Array(pageLimit).fill(0).map((_, idx)=>{
            return first + idx + 1
        })
    };
    return (
        <div>
            <h1 className='title'>{title}</h1>
            <article>
                {
                    getPageData().map((post:PostProps, idx:number)=>(<Post key={idx} data={post}/>))
                }
            </article>
            <div className='flex'>
                <button className={`prev ${page===1 && 'disabled'}`} onClick={goToPrev}>prev</button>
                {
                    getPagination().map((pageNum, idx)=>{
                        return <button key={idx} onClick={selectPage} className={`page-number ${page===pageNum && 'activated'}`}>{pageNum}</button>
                    })
                }
                <button className={`next ${page=== PAGES && 'disabled'}`} onClick={goToNext}>next</button>
            </div>
        </div>
    )
}