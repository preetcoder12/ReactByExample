import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import ALL_HOOKS from "./All_Hooks/ALL_HOOKS.jsx";
import USE_STATE from "./All_Hooks/USE_STATE.jsx";
import USE_REF from "./All_Hooks/USE_REF.jsx";
import USE_EFFECT from "./All_Hooks/USE_EFFECT.jsx";
import USE_MEMO from "./All_Hooks/USE_MEMO.jsx";
import USE_CALLBACK from "./All_Hooks/USE_CALLBACK.jsx";
import USE_CONTEXT from "./All_Hooks/USE_CONTEXT.jsx";
import Contact from "./All_Hooks/Appcontext_file/Contact.jsx"; // 👈 This is the context provider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Contact> {/* 👈 Wrap everything inside the context provider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ALL_HOOKS />} />
          <Route path="/usestate" element={<USE_STATE />} />
          <Route path="/useref" element={<USE_REF />} />
          <Route path="/useeffect" element={<USE_EFFECT />} />
          <Route path="/usememo" element={<USE_MEMO />} />
          <Route path="/usecallback" element={<USE_CALLBACK />} />
          <Route path="/usecontext" element={<USE_CONTEXT />} />
        </Routes>
      </BrowserRouter>
    </Contact>
  </StrictMode>
);
