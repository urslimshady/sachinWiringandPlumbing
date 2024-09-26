import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result'
import About from './pages/About'
import Message from './pages/Message'
import Faqs from './pages/Faqs'
import Appointment from './pages/Appointment'
import ProjectOverview from './components/ProjectOverview'
import Projects from './pages/Projects'
import ChatModal from './components/ChatModal'
import { AiOutlineMessage } from "react-icons/ai";
import Redirect from './components/Redirect';
import { Helmet } from "react-helmet";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>रोह, नवादा में विशेषज्ञ प्लंबिंग और वायरिंग सेवाएँ | सचिन प्लंबिंग एवं वायरिंग सेवाएँ</title>
        <meta name="description" content="सचिन प्लंबिंग एंड वायरिंग सर्विसेज रोह, नवादा में विशेषज्ञ प्लंबिंग सेवाएं प्रदान करती है। निःशुल्क कोट के लिए हमसे आज ही संपर्क करें!" />
        <meta name="keywords" content="प्लंबिंग और वायरिंग सेवाएं, रोह, नवादा, सचिन प्लंबिंग और वायरिंग सर्विसेज | के पास जानकार और अनुभवी तकनीशियन हैं, प्रतिस्पर्धी मूल्य निर्धारण की पेशकश करते हैं, और उच्च गुणवत्ता वाली सामग्री का उपयोग करते हैं। | प्लंबिंग सेवाओं के साथ रोह में सर्वश्रेष्ठ प्लंबिंग सेवाओं का अनुभव लें!" />
        <meta name="author" content="सचिन प्लंबिंग एंड वायरिंग सर्विसेज" />
      </Helmet>
       <div className="box-sizing:border-box bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/about" element={<About />} />
        <Route path="/message" element={<Message />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-overview/:title" element={<ProjectOverview />} />
        <Route path='/success' element={<Redirect />} />
      </Routes>
      <AiOutlineMessage
        className="chat cursor-pointer  p-3 fixed
          bottom-20 right-4 h-16 w-16 z-50 rounded-full"        
        onClick={() => setOpen(!open)}
      />
      {open && <ChatModal />}
    </div>
    </>
  );
}

export default App;
