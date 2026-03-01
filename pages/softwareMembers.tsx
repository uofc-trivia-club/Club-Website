import Footer from '../components/Footer';
import Head from '../components/Header';
import Image from 'next/image';
import React from 'react';
import SubpageHeader from '../components/SubpageHeader';
import memberStyles from '../styles/MembershipSection.module.css';
import styles from '../styles/SubpageLayout.module.css';


interface SoftwareMember {
    name: string;
    position: string;
    imageUrl?: string;
    bio?:string;
}

const SoftwareMemberPage: React.FC = () => {
    const currentSoftwareMembers: SoftwareMember[] = [
        {
            name:"Chloe",
            position:"Software Lead", 
            imageUrl:"/assets/chloe.png",
            bio:"I made a trivia club because I love trivia so much! 🤩🤩🤩"
        },
        {
            name:"Agastya Parashar",
            position:"Software Developer",
            imageUrl:"/assets/agastya.jpg",
            bio:"I am Agastya, a first year engineering student and an aspiring software engineer! I enjoy trivia and love learning about random obscure facts. Outside of that I enjoy programming, reading novels, playing all kinds of sports as well as video games."
        },
        {
            name:"Saihan",
            position:"Software Developer",
            imageUrl:"/assets/saihaan.jpg",
            bio:"Hello! My name is Saihaan and I'm a 2nd year CS student!"
        }, 
        {
            name: "Sofi Tapias",
            position:"Software Developer",
            imageUrl:"/assets/sofi.png",
            bio:"Hey! I'm Sofi :) I'm software engineering student currently on internship. I love Bingo and trivia!!!"
        }, 
        {
            name:"Abdel",
            position:"Software Developer", 
            imageUrl:"/assets/abdel.jpg",
            bio:"Hi, I'm Abdel (Abdelrahman). I'm a second-year software engineering student, and I like game development"
        }
    ];

    return(
        <div className={styles.pageContainer}>
            <head>
                <title>Software Team Members | Ucalgary Trivia Club</title>
                <meta name="description" content="Meet the dedicated team of developers building the software powering the Ucalgary Trivia Club!"/>
            </head>

            <SubpageHeader title="Software Team Members"/>

            <main className={styles.mainContent}>
                <div className={styles.contentWrapper}>
                    <p style={{textAlign:'center', marginBottom:'2rem'}}>
                        Meet the dedicated team of developers building the software powering the Ucalgary Trivia Club!.
                    </p>

                    <div className={memberStyles.membersContainer}>
                        {currentSoftwareMembers.map((member,index) => (
                            <div key={index} className={memberStyles.memberCard}>
                                <div className={memberStyles.memberImageContainer}>
                                    {member.imageUrl ? (
                                        <Image
                                            src={member.imageUrl}
                                            alt={member.name}
                                            fill
                                            style={{objectFit: 'cover'}}
                                        />
                                    ) : (
                                        <div className={memberStyles.memberPlaceholder}>
                                            <span>👤</span>
                                        </div>
                                    )}
                                   </div>
                                   <h3>{member.name}</h3>
                                   <p className={memberStyles.memberPosition}>{member.position}</p>
                                   <p>{member.bio}</p>
                               </div>
                        ))}
                    
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SoftwareMemberPage;