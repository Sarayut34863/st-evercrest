import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/Landing';
import Layout from './components/Layout';
import DocumentPage from './components/DocumentPage';
import { loreData } from './data/lore';
import { rulesData } from './data/rulebook';
import { tosData } from './data/tos';
import { privacyData } from './data/privacy';
import ScrollToTop from './components/ScrollToTop';

const loreSectionImages = {
  'ST. EVERCREST': '/images/lore/intro.png',
  'ยุคก่อตั้ง': '/images/lore/era_1.webp',
  'ยุคแห่งสงครามสามเผ่า': '/images/lore/era_2.webp',
  'จุดแตกหัก': '/images/lore/era_3.webp',
  'สนธิสัญญาเอเวอร์เครสต์': '/images/lore/era_4.webp',
  'ยุคฟื้นฟู': '/images/lore/era_5.webp',
  'ปี 2026': '/images/lore/era_6.webp'
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        
        <Route element={<Layout />}>
          <Route path="/lore" element={<DocumentPage title="Lore & Story" subtitle="ตำนานเมืองและจดหมายเหตุ" content={loreData} bgImage="https://lh3.googleusercontent.com/sitesv/AA5AbUDXKjfKU8ifFrOhS18S-7HpzShPAnwC7EzDc_jiv0pvxuecK5A9vP_cvUYOlz19gWUeL0o5UF8gYAyE9k4xtJbmV-yIKW76YJPAXyu6xnma4FPjEyIwWP9HFRfWWReE3x68BhCIVCrAUjvfBvJWApE761F8RzxbZDmjmY8r0Rep6tutstQifyuzaZr7ZHQ" sectionImages={loreSectionImages} />} />
          <Route path="/rulebook" element={<DocumentPage title="Roleplay Rulebook" subtitle="กฎการเล่นเซิร์ฟเวอร์หลัก" content={rulesData} bgImage="https://lh3.googleusercontent.com/sitesv/AA5AbUAXJl0U5k7LoWV4mCiYO-oW-vkLd8wTSt3CX6eb4q3nMT1IVCrC_6e1OPli-w6qBIibA1wlbUGlH0wmJlV_ouBYAMtFSv0GRvyWeYFwwVIv0Vy0EBqOd5Lhl1XWwXpZW778w9ldc4msaMrfU7CkgLuqKoRYIEaW7N1XZH5UvQoQf7YhqqboRekMMFCm" />} />
          <Route path="/terms-of-service" element={<DocumentPage title="Terms of Service" subtitle="เงื่อนไขการให้บริการ" content={tosData} variant="legal" bgImage="https://lh3.googleusercontent.com/sitesv/AA5AbUAFbA13wnhhcqUyUzJ0iC2tA2Vuz5D7oW-BiDoSeFoBHF1dG-lB7LSgZ0Qbf7Mm4E7GSIgKEH8pJiy-Vu5aw8_0H5u2RYQQsdklhTGRmzUeXFF5cqYmftXB36FHCjpifkj9ICPswPuzpYQVemxwwcd_QUSxSugt-Aw_0BRX8Y1kxjc8L5Ff39zje5K4DS-GXgpFTtoDmXn-J5rg4Qhb4Ok" />} />
          <Route path="/privacy-policy" element={<DocumentPage title="Privacy Policy" subtitle="นโยบายความเป็นส่วนตัว" content={privacyData} variant="legal" bgImage="https://lh3.googleusercontent.com/sitesv/AA5AbUAxzDCAu32O-wfxlx4rlvT6sIzfE95CyZNfduvWIDFGvHmXS1VWlvzOMBjCKa_dU1ww52i9GZABNbmwqTOCI2oUIcjjSJ3heacL7WtokV1RQe_VuCo70QrBvkHdnDZPth5Rfyyiik1-76kbbOdlkWRU65yVGjNgOMbyn_-jwgzTYPiklT6zEkG9_uFN7N4" />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
