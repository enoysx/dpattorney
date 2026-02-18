import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@/components/layout';
import {
  HomePage,
  AboutPage,
  TeamArchivePage,
  TeamDetailPage,
  PracticeOverviewPage,
  PracticeDetailPage,
  InsightsLandingPage,
  ArticleDetailPage,
  CareersLandingPage,
  WhyJoinPage,
  CulturePage,
  JobOpeningsPage,
  ApplicationFormPage,
  ContactPage,
  PrivacyPolicyPage,
  TermsPage,
  NotFound,
} from '@/pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home */}
          <Route index element={<HomePage />} />

          {/* About */}
          <Route path="tentang-kami" element={<AboutPage />} />

          {/* Team */}
          <Route path="tim">
            <Route index element={<Navigate to="/tim/partner" replace />} />
            <Route path=":type" element={<TeamArchivePage />} />
            <Route path=":type/:id" element={<TeamDetailPage />} />
          </Route>

          {/* Practice Areas */}
          <Route path="area-praktik">
            <Route index element={<PracticeOverviewPage />} />
            <Route path=":slug" element={<PracticeDetailPage />} />
          </Route>

          {/* Insights */}
          <Route path="wawasan">
            <Route index element={<InsightsLandingPage />} />
            <Route path=":id" element={<ArticleDetailPage />} />
          </Route>

          {/* Careers */}
          <Route path="karir">
            <Route index element={<CareersLandingPage />} />
            <Route path="mengapa-bergabung" element={<WhyJoinPage />} />
            <Route path="budaya" element={<CulturePage />} />
            <Route path="lowongan" element={<JobOpeningsPage />} />
            <Route path="lamar" element={<ApplicationFormPage />} />
          </Route>

          {/* Contact */}
          <Route path="kontak" element={<ContactPage />} />

          {/* Legal */}
          <Route path="kebijakan-privasi" element={<PrivacyPolicyPage />} />
          <Route path="syarat-ketentuan" element={<TermsPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
