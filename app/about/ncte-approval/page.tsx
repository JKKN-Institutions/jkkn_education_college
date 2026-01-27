'use client';

import { useEffect } from 'react';

export default function NCTEApproval() {
  useEffect(() => {
    // Redirect to PDF file immediately and replace history entry
    window.location.replace('/pdf/NCTE-Approval.pdf');
  }, []);

  return null;
}
