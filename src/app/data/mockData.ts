// mockData.ts
export const mockData = {
    users: [
      {
        id: 1,
        img: "https://media.superdm.me/images/profile/8005f02d43fa06e7d05/57hun7v.jpeg",
        name: "Hridyansh Sahu",
        role: "Building SuperDM. Ex-Meesho",
        location: "Bengaluru, Karnataka, India",
        experience: [
          {
            position: "Engineering Lead (Founding Member)",
            company: "SuperDM Full-time",
            duration: "Oct 2023 - Present 11 mos",
          },
          {
            position: "SDE-3",
            company: "Meesho",
            duration: "Jan 2023 - Sep 2023",
          },
        ],
        chats: [
          {
            sender: "Hridyansh Sahu",
            message: "Hi, First of all, thanks for taking the time to write in...",
          },
          {
            sender: "Devesh Kumar Tiwari",
            message: "I'm Devesh Kumar Tiwari, Final-year engineering student...",
          },
        ],
      },
      {
        id: 2,
        img: "https://example.com/images/profile/2.jpeg",
        name: "Devesh Kumar Tiwari",
        role: "Engineering Student",
        location: "Delhi, India",
        experience: [
          {
            position: "Intern",
            company: "Tech Company",
            duration: "Jan 2024 - Present",
          },
        ],
        chats: [
          {
            sender: "Hridyansh Sahu",
            message: "Hello Devesh, how can I assist you today?",
          },
          {
            sender: "Devesh Kumar Tiwari",
            message: "I'm looking for some guidance on my project.",
          },
        ],
      },
    ],
  
    addMessage(userId: number, sender: string, message: string) {
      const user = this.users.find(user => user.id === userId);
      if (user) {
        user.chats.push({ sender, message });
      }
    },
  };
  