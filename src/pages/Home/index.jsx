import React from 'react';
import { Banner, PopularList } from 'src/components';

export const Home = () => {
    const listPopular = [
        {
         img: "images/popular1.png",
         head: "Biệt Đội Siêu Anh Hùng ",
         title: "Avengers 3: Infinity Warasdsdasdsdasda",
        },
        {
         img: "images/popular2.png",
         head: "Người Sắt ",
         title: "Iron Man"
        },
        {
         img: "images/popular3.png",
         head: "Người Cá",
         title: "Aqua Man",
        },
        {
         img: "images/popular4.png",
         head: "Siêu Nhân ",
         title: "Super Man",
        },
        {
         img: "images/popular5.png",
         head: "Người Phụ Nữ Tuyệt Vời ",
         title: "Wonder Woman",
        },
        {
         img: "images/popular6.png",
         head: "Ánh Sáng ",
         title: "The Flash",
        },
     ]

    return (
        <>
            <Banner />
            <PopularList listItem={listPopular}/>
            <PopularList listItem={listPopular}/>
            <PopularList listItem={listPopular}/>
            <PopularList listItem={listPopular}/>
        </>
    );
}
