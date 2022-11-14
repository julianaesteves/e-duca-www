import { VideoClassTitle } from "./VideoClassTitle";
import Sidebar from "../Sidebar";
import { Video } from "./Video"; 
import style from './videoClass.module.scss'


export default function VideoClass(){
    return(
        <>
        
        <div className={style.align}>
        <Sidebar/>
        <div className={style.alignVideo}>
        <Video video="https://www.youtube.com/embed/JhkRAUdC-dY"></Video>
        <VideoClassTitle/>
        </div>
        </div>
        
        </>
    );
}