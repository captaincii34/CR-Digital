import React from 'react';
import BookingSection from './BookingSection';

const CalendarView: React.FC = () => {
  return (
    <div className="calendar-page-view" style={{ 
      background: '#0a0a0a', 
      minHeight: '100vh', 
      paddingTop: '100px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <BookingSection />
      
      {/* Back Button for better UX */}
      <div style={{ padding: '40px 0 80px', textAlign: 'center' }}>
        <button 
          onClick={() => window.location.hash = ''} 
          style={{ 
            background: 'transparent', 
            border: '1px solid #333', 
            color: '#888', 
            padding: '14px 40px', 
            borderRadius: '12px', 
            cursor: 'pointer', 
            textTransform: 'uppercase',
            fontWeight: 700,
            fontSize: '12px',
            letterSpacing: '1px',
            transition: '0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--cray-gold)'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = '#333'}
        >
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default CalendarView;