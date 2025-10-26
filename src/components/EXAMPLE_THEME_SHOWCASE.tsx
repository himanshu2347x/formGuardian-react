/**
 * Example: Showcasing all beautiful themes available in FormGuardian
 */

import { useState } from 'react';
import { DynamicForm } from '../index';
import type { ThemeName } from '../lib/themes';
import type { FieldConfig } from '../lib/types';

const fields: FieldConfig[] = [
  {
    name: 'name',
    label: 'Full Name',
    type: 'text',
    placeholder: 'John Doe',
    required: true,
    validators: ['required', { type: 'minLength', value: 2, message: 'Min 2 characters' }]
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'john@example.com',
    required: true,
    validators: ['required', 'email']
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: '1234567890',
    validators: ['phone']
  },
  {
    name: 'experience',
    label: 'Years of Experience',
    type: 'number',
    placeholder: '5',
    validators: [{ type: 'number', message: 'Must be a number' }]
  },
  {
    name: 'skills',
    label: 'Skills',
    type: 'checkbox',
    options: [
      { value: 'react', label: 'React' },
      { value: 'typescript', label: 'TypeScript' },
      { value: 'nodejs', label: 'Node.js' }
    ],
    defaultValue: []
  },
  {
    name: 'agree',
    label: 'I agree to the terms',
    type: 'checkbox',
    required: true,
    validators: [{ type: 'custom', custom: v => v === true, message: 'You must agree' }]
  }
];

const themeNames: ThemeName[] = [
  'modern',
  'dark',
  'minimal',
  'gradient',
  'ocean',
  'sunset',
  'purple',
  'forest'
];

export function ThemeShowcase() {
  const [selectedTheme, setSelectedTheme] = useState<ThemeName>('modern');

  const handleSubmit = (values: Record<string, unknown>) => {
    alert(`Submitted with theme: ${selectedTheme}\n${JSON.stringify(values, null, 2)}`);
  };

  return (
    <div style={{ minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#1f2937' }}>
          FormGuardian Theme Showcase
        </h1>

        {/* Theme Selector */}
        <div style={{ 
          display: 'flex', 
          gap: '0.5rem', 
          marginBottom: '3rem', 
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {themeNames.map((theme) => (
            <button
              key={theme}
              onClick={() => setSelectedTheme(theme)}
              style={{
                padding: '0.5rem 1rem',
                border: selectedTheme === theme ? '2px solid #3b82f6' : '1px solid #d1d5db',
                borderRadius: '0.375rem',
                background: selectedTheme === theme ? '#3b82f6' : '#ffffff',
                color: selectedTheme === theme ? '#ffffff' : '#1f2937',
                cursor: 'pointer',
                fontWeight: selectedTheme === theme ? 600 : 400,
                transition: 'all 0.2s ease',
              }}
            >
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </button>
          ))}
        </div>

        {/* Theme Description */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          padding: '1rem',
          background: '#f3f4f6',
          borderRadius: '0.5rem',
          color: '#4b5563'
        }}>
          <p style={{ margin: 0 }}>
            Current Theme: <strong>{selectedTheme.toUpperCase()}</strong>
          </p>
        </div>

        {/* Form with Selected Theme */}
        <div style={{ 
          maxWidth: '500px', 
          margin: '0 auto',
          background: '#ffffff',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
        }}>
          <h2 style={{ marginTop: 0, marginBottom: '1.5rem', textAlign: 'center' }}>
            Try the {selectedTheme} Theme
          </h2>
          <DynamicForm
            fields={fields}
            onSubmit={handleSubmit}
            theme={selectedTheme}
            validationMode="onChange"
            submitButtonText="Submit"
            showResetButton
            submitThrottleMs={2000}
          />
        </div>

        {/* Available Themes Info */}
        <div style={{ maxWidth: '600px', margin: '4rem auto' }}>
          <h3 style={{ color: '#1f2937', marginBottom: '1rem' }}>Available Themes:</h3>
          <ul style={{ color: '#4b5563', lineHeight: 1.8 }}>
            <li><strong>modern</strong> - Clean, professional, vibrant blue theme</li>
            <li><strong>dark</strong> - Sleek dark mode with eye-friendly colors</li>
            <li><strong>minimal</strong> - Elegant, minimalist design</li>
            <li><strong>gradient</strong> - Vibrant with gradient accents</li>
            <li><strong>ocean</strong> - Cool blues and teals, calm and professional</li>
            <li><strong>sunset</strong> - Warm oranges, reds, and pinks</li>
            <li><strong>purple</strong> - Elegant, creative, modern purple tones</li>
            <li><strong>forest</strong> - Green, earthy, natural theme</li>
          </ul>
        </div>

        {/* Usage Example */}
        <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
          <h3 style={{ color: '#1f2937' }}>Usage Example:</h3>
          <pre style={{
            background: '#1f2937',
            color: '#e5e7eb',
            padding: '1rem',
            borderRadius: '0.5rem',
            overflow: 'auto',
            fontSize: '0.875rem'
          }}>
{`<DynamicForm
  fields={fields}
  onSubmit={handleSubmit}
  theme="modern"  // or any theme name
  validationMode="onChange"
  submitButtonText="Submit"
  showResetButton
/>

// Available themes:
// 'modern' | 'dark' | 'minimal' | 'gradient' 
// | 'ocean' | 'sunset' | 'purple' | 'forest'`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default ThemeShowcase;
