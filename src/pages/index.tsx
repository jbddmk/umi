import styles from './index.less';
import {useEffect} from "react";
import { history } from 'umi'

export default function IndexPage() {
  useEffect(()=>{
    // @ts-ignore
    history.push({
      pathname:'/users',
      query:{
        id:100
      }
    })
  })
  return (
    <div>
      <h1 className={styles.titleName}>Page index</h1>
    </div>
  );
}
