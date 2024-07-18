import styles from "./page.module.css";
import Mainheader from "@/components/MainHeader";
import Banner from "@/components/Banner";
import ProjectsAndSelling from "@/components/ProjectsAndSelling";
import LastProjects from "@/components/LastProjects";

export default function Home() {
  return (
    <>
      <div className={styles.starter}>
        <div className={styles.header}>
          <Mainheader />
        </div>
        <div className={styles.banner}>
          <Banner />
        </div>
      </div>
      <ProjectsAndSelling />
      <LastProjects />
    </>
  );
}
