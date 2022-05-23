import styles from "../styles/sidebar.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RoomAvatar from "./RoomAvatar";

import avatar1 from "../assets/avatar-1.webp";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.webp";
import avatar4 from "../assets/avatar-4.webp";

const Sidebar = () => {
  const router = useRouter();
  const [channels, setChannels] = useState([]);

  const getchs = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/getchannels`
      );

      const data = await response.json();
      setChannels(data);
      router.push(`?channel=${data[0].roomId}&name=${data[0].roomName}`);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getchs();
  }, []);

  return (
    <div className={styles.wrapper}>
      {channels.map((channel, index) => (
        <RoomAvatar
          key={index}
          id={channel.roomId}
          avatar={channel.avatar}
          name={channel.roomName}
        />
      ))}
    </div>
  );
};

export default Sidebar;
