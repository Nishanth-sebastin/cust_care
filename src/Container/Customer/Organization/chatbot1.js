import image from "./img/bot_image.jpg";
import send from "./img/send_icon.png";
import { useState, useRef, useEffect } from "react";
import LayoutCustomer from '../../../MainLayout/LayoutCustomer';
import "./style.css";
import Axios from "axios";
import SendIcon from '@mui/icons-material/Send';


function App() {
  const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();

  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

useEffect (() =>{
  Axios.post("http://localhost:8080/chatbot1/deleteMsg",{
          
           organization:organization
    
  }).then((response) => {
     console.log('successfully deleted')          
   })     
  
},[])

  const customer = localStorage.getItem("custname");
  const organization = localStorage.getItem("botorg_name");
  const [time, setTime] = useState(`${hours}:${seconds}`); //using the useState hook to get the data from the local time and set it to the time variable
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${months[month]} ${year}`
  ); //using the useState hook to get the data from the local date and set it to the dateTime variable

  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === "Thursday, Aug 13 2022") {
      //if the dateTime is Thursday, 13 Aug 2022, the bot will be inactive
      isActive = false;
    }
    const status = document.querySelector(".status");
    // selecting the status class
    if (isActive === true) {
      //if the bot is active
      status.innerHTML = "Active";
      status.style.color = "green";
    } else {
      status.innerHTML = "Not Active";
      status.style.color = "red";
    }
  };

  
  const [humanmsg,setHumanmsg] = useState("hi");
  const [data,setData] = useState([{
    // botmsg:"",
    // humanmsg:""
  }]);
 

  
  

  

  const handleInput = () => {

    
    const input = document.querySelector("#input").value;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;
    const inputRef = document.querySelector("#input");

    if(customer == 'k2'){

    let badwords = ["fuck|bad|stupid|useless|bitch|crazy|nonsense"];
    let words = new RegExp(badwords);
    if (words.test(document.querySelector("#input").value)) {
      // if the input contains bad words
   
     
      setTimeout(() => {
        const bmsg = "Please do not use bad words" // display the message
       
        Axios.post("http://localhost:8080/chatbot1", {
           botmsg : bmsg,
           humanmsg : input,
           customer: customer,
           organization:organization
      
          }).then((response) => {
                  
          })        

         
          inputRef.value = ""; // clear the input
          console.log(customer,organization);

        }, 500);

        
      }

       let welcome = [
      "hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      setTimeout(() => {
        const bmsg = "Hello There how are you doing today?" // display the message
       
        Axios.post("http://localhost:8080/chatbot1", {
           botmsg : bmsg,
           humanmsg : input,
           customer: customer,
           organization:organization
      
          }).then((response) => {
             
          })        

        
         
          inputRef.value = ""; // clear the input

        }, 500);

    }
    let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye"];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      setTimeout(() => {
        const bmsg = "Bye, have a nice day" // display the message
       
        Axios.post("http://localhost:8080/chatbot1", {
           botmsg : bmsg,
           humanmsg : input,
           customer: customer,
           organization:organization
      
          }).then((response) => {
          
          })        

        
         
          inputRef.value = ""; // clear the input

        }, 500);

    }
    let thanks = [
      "Thanks|thanks|thank you|thank you very much|Thank you very much",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      setTimeout(() => {
        const bmsg = "You are welcome" // display the message
       
        Axios.post("http://localhost:8080/chatbot1", {
           botmsg : bmsg,
           humanmsg : input,
           customer: customer,
           organization:organization

          }).then((response) => {
                   
          })        

       
         
          inputRef.value = ""; // clear the input

        }, 500);

    }
    let how = [
      "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
    ];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      setTimeout(() => {
        const bmsg = "I am fine, thank you" // display the message
       
        Axios.post("http://localhost:8080/chatbot1", {
           botmsg : bmsg,
           humanmsg : input,
           customer: customer,
           organization:organization
      
          }).then((response) => {
                 
          })        

     
         
          inputRef.value = ""; // clear the input

        }, 500);

    }
    let good = [
      "That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      setTimeout(() => {
        const bmsg = "😁" // display the message
       
        Axios.post("http://localhost:8080/chatbot1", {
           botmsg : bmsg,
           humanmsg : input,
           customer: customer,
           organization:organization
      
          }).then((response) => {
                 
          })        

     
         
          inputRef.value = ""; // clear the input

        }, 500);

    }

    let response = [
      "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|I'm good|i'm good|great|Great",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      setTimeout(() => {
        const bmsg = "That is good" // display the message
       
        Axios.post("http://localhost:8080/chatbot1", {
           botmsg : bmsg,
           humanmsg : input,
           customer: customer,
           organization:organization
      
          }).then((response) => {
                  
          })        

       
         
          inputRef.value = ""; // clear the input

        }, 500);

    }

    let nameAsk = [
      "What's your name|what's your name|What is your name|what is your name",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      setTimeout(() => {
        const bmsg = "My name is Bot" // display the message
       
        Axios.post("http://localhost:8080/chatbot1", {
           botmsg : bmsg,
           humanmsg : input,
           customer: customer,
           organization:organization
      
          }).then((response) => {
               
          })        

         
          inputRef.value = ""; // clear the input

        }, 500);

    }

    let owner = [
      "Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner",
    ];
    let words9 = new RegExp(owner);
    if (words9.test(document.querySelector("#input").value)) {
      setTimeout(() => {
        const bmsg = "Ratan Tata" // display the message
       
        Axios.post("http://localhost:8080/chatbot1", {
           botmsg : bmsg,
           humanmsg : input,
           customer: customer,
           organization:organization
      
          }).then((response) => {
               
          })        

       
          inputRef.value = ""; // clear the input

        }, 500);

    }

    let owner2 = [
      "Who's Treasure|who's Treasure|Who is Treasure|who is Treasure",
    ];
    
    let words10 = new RegExp(owner2);
    if (words10.test(document.querySelector("#input").value)) {
      setTimeout(() => {
        const bmsg = "Please do not use bad words" // display the message
       
        Axios.post("http://localhost:8080/chatbot1", {
           botmsg : bmsg,
           humanmsg : input,
           customer: customer,
           organization:organization
      
          }).then((response) => {
                  
          })        

         
         
          inputRef.value = ""; // clear the input

        }, 500);

    }

    let ageAsk = [
      "What's your age|what's your age|What is your age|what is your age|How old are you|how old are you",
    ]; //adding the age-question
    let words11 = new RegExp(ageAsk);
    if (words11.test(document.querySelector("#input").value)) {
      setTimeout(() => {
        const bmsg = "Please do not use bad words" // display the message
       
        Axios.post("http://localhost:8080/chatbot1", {
           botmsg : bmsg,
           humanmsg : input,
           customer: customer,
           organization:organization
      
          }).then((response) => {
                    
          })        

       
         
          inputRef.value = ""; // clear the input

        }, 500);

    }
      
      
  
    }


    if(customer == 'k3'){
      let response = [
        "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|I'm good|i'm good|great|Great",
      ];
      let words7 = new RegExp(response);
      if (words7.test(document.querySelector("#input").value)) {
        setTimeout(() => {
          const bmsg = "That is good" // display the message
         
          Axios.post("http://localhost:8080/chatbot1", {
             botmsg : bmsg,
             humanmsg : input,
             customer: customer,
             organization:organization
        
            }).then((response) => {
                    
            })        
  
         
           
            inputRef.value = ""; // clear the input
  
          }, 500);
  
      }
  
      let nameAsk = [
        "What's your name|what's your name|What is your name|what is your name",
      ];
      let words8 = new RegExp(nameAsk);
      if (words8.test(document.querySelector("#input").value)) {
        setTimeout(() => {
          const bmsg = "My name is Kishor" // display the message
         
          Axios.post("http://localhost:8080/chatbot1", {
             botmsg : bmsg,
             humanmsg : input,
             customer: customer,
             organization:organization
        
            }).then((response) => {
                 
            })        
  
           
            inputRef.value = ""; // clear the input
  
          }, 500);
  
      }
  
      let owner = [
        "Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner",
      ];
      let words9 = new RegExp(owner);
      if (words9.test(document.querySelector("#input").value)) {
        setTimeout(() => {
          const bmsg = "Ratan Tata" // display the message
         
          Axios.post("http://localhost:8080/chatbot1", {
             botmsg : bmsg,
             humanmsg : input,
             customer: customer,
             organization:organization
        
            }).then((response) => {
                 
            })        
  
         
            inputRef.value = ""; // clear the input
  
          }, 500);
  
      }
  
      let owner2 = [
        "Who's Treasure|who's Treasure|Who is Treasure|who is Treasure",
      ];
      
      let words10 = new RegExp(owner2);
      if (words10.test(document.querySelector("#input").value)) {
        setTimeout(() => {
          const bmsg = "Please do not use bad words" // display the message
         
          Axios.post("http://localhost:8080/chatbot1", {
             botmsg : bmsg,
             humanmsg : input,
             customer: customer,
             organization:organization
        
            }).then((response) => {
                    
            })        
  
           
           
            inputRef.value = ""; // clear the input
  
          }, 500);
  
      }
  
      let ageAsk = [
        "What's your age|what's your age|What is your age|what is your age|How old are you|how old are you",
      ]; //adding the age-question
      let words11 = new RegExp(ageAsk);
      if (words11.test(document.querySelector("#input").value)) {
        setTimeout(() => {
          const bmsg = "Please do not use bad words" // display the message
         
          Axios.post("http://localhost:8080/chatbot1", {
             botmsg : bmsg,
             humanmsg : input,
             customer: customer,
             organization:organization
        
            }).then((response) => {
                      
            })        
  
         
           
            inputRef.value = ""; // clear the input
  
          }, 500);
  
      }
    }
  }
    Axios.post("http://localhost:8080/chatbot1/get").then((response) => {
   // console.log('success') ;
    setData(response.data.message) ;
      
  })
  
  
  return (
    <LayoutCustomer>
     
           <div className="App" onLoad={checkStatus}>
           <div className="wrapper">
             <div className="content">
               <div className="header">
                 <div className="img">
                   <img src={image} alt="" />
                 </div> 
                 <div className="right">
                   <div className="name">ChatBot</div>
                   <div className="status">Active</div>
                 </div>
               </div>
               <div className="main">
                 <div className="main_content">
                  {data.map((row) => (
                   <div className="messages">
                  
                     <div
                       className="bot-message"
                       id="message1"
                       ref={botmessage}
                     >{row.botmsg}
                     </div>
                     <div
                       className="human-message"
                       id="message2"
                       ref={humanMessage}
                     >{row.humanmsg}
                     </div>

                   </div>
                   ))} 
                 </div>
               </div>
               <div className="bottom">
                 <div className="btm">
                   <div className="input">
                     <input
                       type="text"
                       id="input"
                       placeholder="Enter your message"
                       ref={input}
                     />
                   </div>
                   <div className="btn">
                   <img src={send} alt="" height="35px" onClick={handleInput} />
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
      
   
    </LayoutCustomer>
  );
}

export default App;
