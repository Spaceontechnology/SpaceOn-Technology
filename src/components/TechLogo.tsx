import React from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
}

export default function TechLogo({ name, className = "w-5 h-5" }: TechLogoProps) {
  const n = name.toLocaleLowerCase();

  // Python brand colors - highly visible custom yellow & blue
  if (n.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor">
        <path d="M12 2c-3.1 0-4.9 1.7-4.9 4.7v1.7h5V9h-7C2.4 9 1 10.4 1 13.1v4c0 2.8 1.4 4.1 4.2 4.1h2.5V19.4c0-3 1.8-4.7 4.9-4.7h3.3c3.1 0 4.1-1.3 4.1-4.1V6.7C20 3.9 18.6 2 15.8 2H12zm2.1 2.3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="#3776ab" />
        <path d="M12 22c3.1 0 4.9-1.7 4.9-4.7v-1.7h-5v-1h7c2.7 0 4.1-1.4 4.1-4.1v-4c0-2.8-1.4-4.1-4.2-4.1h-2.5v1.8c0 3-1.8 4.7-4.9 4.7H8.1C5 13 4 14.3 4 17.1v3.9c0 2.8 1.4 3.7 4.2 3.7H12zm-2.1-2.3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#ffe052" />
      </svg>
    );
  }

  // TensorFlow
  if (n.includes('tensorflow')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2.3l9 5.2v10.3l-9 5.2-9-5.2V7.5l9-5.2z" fill="#FF6F00" opacity="0.85" />
        <path d="M12 5L4.5 9.3v8l7.5 4.3 7.5-4.3v-8L12 5zm-1.5 5.5h3v7h-3v-7z" fill="#FFE082" />
      </svg>
    );
  }

  // OpenAI APIs
  if (n.includes('openai') || n.includes('gpt')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#10a37f' }}>
        <path d="M21.3 10.1c.1-.5.1-1.1 0-1.6-.1-.5-.3-1-.6-1.4-.4-.5-.9-.9-1.5-1.1-.3-.1-.6-.2-.9-.2v-.1c.1-.5 0-1.1-.1-1.6-.1-.5-.4-1-.7-1.4-.4-.5-.9-.8-1.5-1.1-.5-.2-1.1-.3-1.6-.2l-5.6 3.2c-.3.2-.5.5-.6.8-.2.3-.2.6-.2 1l.1 1.6-4.9 2.8c-.5.3-.9.7-1.2 1.2s-.4 1.1-.4 1.7v6.5c-.1.5 0 1.1.1 1.6.1.5.3 1 .6 1.4.3.4.8.8 1.3 1.1.3.1.6.2.9.2v.1c-.1.5 0 1.1.1 1.6.1.5.4 1 .7 1.4.4.5.9.8 1.5 1.1.5.2 1.1.3 1.6.2l5.6-3.2c.3-.2.5-.5.6-.8.2-.3.2-.6.2-1l-.1-1.6 4.9-2.8c.5-.3.9-.7 1.2-1.2s.4-1.1.4-1.7V10.1zm-13 .9c0 .4-.1.7-.3 1l-1.4.8c-.2.1-.5.2-.8.2-.3 0-.6-.1-.9-.2-.3-.1-.5-.3-.7-.6-.2-.3-.3-.6-.3-.9v-1.6l1.3-.8c.2-.1.5-.2.8-.2.3 0 .6.1.9.2.3.1.5.3.7.6.2.3.3.6.3.9l.1 1.6zm4.1 6.5l-1.4.8c-.2.1-.5.1-.8.1-.3 0-.6-.1-.9-.2-.3-.1-.5-.3-.7-.6s-.3-.6-.3-.9v-1.6c0-.4.1-.7.3-1l1.4-.8c.2-.1.5-.2.8-.2.3 0 .6.1.9.2.3.1.5.3.7.6.2.3.3.6.3.9l-.1 1.6zm.5-4.5V11c0-.4-.1-.7-.3-1l-1.4-.8c-.2-.1-.5-.2-.8-.2-.3 0-.6.1-.9.2-.3.1-.5.3-.7.6-.2.3-.3.6-.3.9l.1 1.6c0 .4.1.7.3 1l1.4.8c.2.1.5.2.8.2.3 0 .6-.1.9-.2.3-.1.5.3.7-.6.2-.3.3-.6.3-.9v-1.6zm4.1-3.6l-1.4-.8c-.2-.1-.5-.1-.8-.1-.3 0-.6.1-.9.2-.3.1-.5.3-.7.6s-.3.6-.3.9v1.6c0 .4.1.7.3 1l1.4.8c.2.1.5.2.8.2.3 0 .6-.1.9-.2.3-.1.5.3.7-.6.2-.3.3-.6.3-.9v-1.6zm3.3 2.1c0 .4-.1.7-.3 1l-1.4.8c-.2.1-.5.2-.8.2-.3 0-.6-.1-.9-.2-.3-.1-.5-.3-.7-.6s-.3-.6-.3-.9v-1.6c0-.4.1-.7.3-1l1.4-.8c.2-.1.5-.2.8-.2.3 0 .6.1.9.2.3.1.5.3.7.6.2.3.3.6.3.9v1.6zm-1.8 1.9c0-.4.1-.7.3-1l1.4-.8c.2-.1.5-.2.8-.2.3 0 .6.1.9.2.3.1.5.3.7.6.2.3.3.6.3.9l-.1 1.6c0 .4-.1.7-.3 1l-1.4.8c-.2.1-.5.2-.8.2-.3 0-.6-.1-.9-.2-.3-.1-.5-.3-.7-.6s-.3-.6-.3-.9l.1-1.6z" />
      </svg>
    );
  }

  // LangChain - beautifully linked chains
  if (n.includes('langchain')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    );
  }

  // PyTorch
  if (n.includes('pytorch')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#EE4C2C' }}>
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.83-14.712l4.897 4.9-4.897 4.9V7.288z" />
        <path d="M13.784 12.188l-4.897-4.9v9.8l4.897-4.9z" fill="#FF7A59" />
      </svg>
    );
  }

  // Node.js
  if (n.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7.2v10.4l9 5.2 9-5.2V7.2L12 2z" fill="#339933" opacity="0.85" />
        <path d="M12 4.5L5.5 8.3v7.4l6.5 3.8 6.5-3.8V8.3L12 4.5z" fill="#fff" opacity="0.15" />
        <path d="M12 8v8M9.5 10.5l2.5 2.5 2.5-2.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // AWS / Amazon
  if (n.includes('aws') || n.includes('amazon')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    );
  }

  // Docker
  if (n.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#2496ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="12" y1="3" x2="12" y2="17" />
        <path d="M12 17c0 2.2-1.8 4-4 4H5c-1.7 0-3-1.3-3-3" />
      </svg>
    );
  }

  // Pinecone
  if (n.includes('pinecone')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-10 9 10 9 10-9-10-9z" />
        <path d="m12 3v18" />
        <path d="M2.5 12h19" />
      </svg>
    );
  }

  // PostgreSQL
  if (n.includes('postgresql') || n.includes('postgres')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#4169E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }

  // Laravel
  if (n.includes('laravel')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FF2D20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-10 6 10 6 10-6-10-6z" />
        <path d="M2 17l10 6 10-6" />
        <path d="M2 13l10 6 10-6" />
      </svg>
    );
  }

  // Kubernetes
  if (n.includes('kubernetes')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#326CE5' }}>
        <path d="M12 2L4 5.5v13L12 22l8-3.5v-13L12 2zm1 4.5l5 2.2v6.6l-5 2.2v-11zm-2 0v11l-5-2.2v-6.6l5-2.2z" />
      </svg>
    );
  }

  // Gemini
  if (n.includes('gemini') || n.includes('google')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#8AB4F8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <path d="M3 12h18" />
        <path d="m12 3-3 5-6 1 4.5 4.5-1 6 5.5-3 5.5 3-1-6 4.5-4.5-6-1-3-5z" fill="#8AB4F8" opacity="0.15" />
      </svg>
    );
  }

  // TypeScript
  if (n.includes('typescript') || n.includes('ts')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#3178C6' }}>
        <path d="M2 2h20v20H2V2zm12.3 11.5c0-.6-.2-1-.7-1.4-.4-.3-1.1-.6-1.9-.9-.8-.3-1.4-.6-1.7-.9s-.5-.7-.5-1.2c0-.5.2-.9.6-1.2s1-.4 1.7-.4c.7 0 1.2.2 1.6.5.4.3.6.8.6 1.4h2.2c0-1.2-.4-2-1.2-2.7-.8-.6-1.8-1-3.2-1-1.4 0-2.5.3-3.2 1-.7.7-1.1 1.5-1.1 2.6 0 .9.3 1.7.9 2.2.6.5 1.5.9 2.7 1.3 1 .3 1.7.6 2 .9.3.3.5.7.5 1.2 0 .6-.2 1-.7 1.3-.5.3-1.2.5-2 .5-1 0-1.7-.2-2.2-.7-.5-.5-.8-1.2-.8-2H4.3c0 1.4.5 2.5 1.4 3.2.9.7 2.1 1 3.7 1 1.6 0 2.9-.3 3.7-1 .8-.7 1.2-1.7 1.2-3z" />
      </svg>
    );
  }

  // React
  if (n.includes('react') || n.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12a15.3 15.3 0 0 1 10-4 15.3 15.3 0 0 1 10 4 15.3 15.3 0 0 1-10 4 15.3 15.3 0 0 1-10-4z" />
      </svg>
    );
  }

  // Database / Vector Databases
  if (n.includes('database') || n.includes('vector') || n.includes('databricks') || n.includes('sql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }

  // Salesforce
  if (n.includes('salesforce')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#00A1E0' }}>
        <path d="M19.16 9.87a4.93 4.93 0 0 0-3.66-3.6 5 5 0 0 0-8.86 1.8 3.5 3.5 0 0 0-2.4 3.33 3.5 3.5 0 0 0 .58 1.95 4.5 4.5 0 0 0-1.8 4 4.5 4.5 0 0 0 4.5 4.5h11.2a4.5 4.5 0 0 0 4.5-4.5 4.5 4.5 0 0 0-4.06-4.48zm-1.16 8.13H8.38a2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 1.76-2.38 3 3 0 0 1 5.48-1.5 3.5 3.5 0 0 1 6.54 1.5 2.5 2.5 0 0 1-.66 4.88z" />
      </svg>
    );
  }

  // Elasticsearch
  if (n.includes('elasticsearch')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#005571' }}>
        <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2zm1 14h-2v-2h2zm2-4H9V8h6z" />
      </svg>
    );
  }

  // Datadog
  if (n.includes('datadog')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#632CA6' }}>
        <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2zm1 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4.5-3.5h-9V8h9z" />
      </svg>
    );
  }

  // Splunk
  if (n.includes('splunk')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#F71E86' }}>
        <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm4 11H8V8h8v5z" />
      </svg>
    );
  }

  // Apache Kafka
  if (n.includes('kafka') || n.includes('apache')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#ffffff' }}>
        <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2zM9 14h2v3H9v-3zm4-4h2v7h-2v-7zm0-4h2v2h-2V6z" />
      </svg>
    );
  }

  // Default Fallback icon (Code / Tags representing architecture)
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
