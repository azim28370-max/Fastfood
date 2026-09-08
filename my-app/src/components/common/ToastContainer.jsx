import React from 'react';
import { useToast } from '../../context/ToastContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  if (!toasts.length) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast-card ${toast.type}`}>
          <div className="toast-icon">
            {toast.type === 'success' && <CheckCircle2 size={22} color="#ffffff" />}
            {toast.type === 'error' && <AlertCircle size={22} color="#ffffff" />}
            {toast.type === 'info' && <Info size={22} color="#ffffff" />}
          </div>
          <div className="toast-message">
            {toast.message}
          </div>
          <button className="toast-close" onClick={() => removeToast(toast.id)}>
            <X size={16} color="#ffffff" />
          </button>
        </div>
      ))}
    </div>
  );
};
