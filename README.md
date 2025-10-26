# FormGuardian React

[![NPM Version](https://img.shields.io/npm/v/formguardian-react.svg)](https://www.npmjs.com/package/formguardian-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Build production-ready React forms in minutes with built-in validation, TypeScript support, and beautiful defaults.

```bash
npm install formguardian-react
```

## Why FormGuardian?

- **⚡ Fast Setup** - Working form in 5 minutes
- **🎯 Smart Validation** - 10+ built-in validators + custom logic
- **🎨 Zero Config Styling** - Beautiful out of the box
- **🔒 Type-Safe** - Full TypeScript support

## Quick Example

```tsx
import { DynamicForm, FieldConfig } from 'formguardian-react';
import 'formguardian-react/styles';

const fields: FieldConfig[] = [
  {
    name: "email",
    type: "email",
    label: "Email",
    required: true,
    validators: [
      { type: "email", message: "Invalid email" }
    ]
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    validators: [
      { type: "minLength", value: 8, message: "Min 8 characters" }
    ]
  }
];

function App() {
  return (
    <DynamicForm
      fields={fields}
      onSubmit={(values) => console.log(values)}
      submitButtonText="Sign In"
    />
  );
}
```

## Core Concepts

### Field Configuration

Each field needs a `name` (required) and accepts these common options:

```tsx
{
  name: "email",              // Required - unique identifier
  type: "email",              // Input type (default: "text")
  label: "Email Address",     // Display label
  required: true,             // Mark as required
  validators: [],             // Validation rules
  placeholder: "you@example.com"
}
```

### Validation

Add multiple validators per field - they run in order:

```tsx
validators: [
  { type: "required", message: "Email required" },
  { type: "email", message: "Invalid format" }
]
```

**Built-in Validators:**
- `required` - Non-empty
- `email` - Valid email format
- `minLength` / `maxLength` - Character limits
- `pattern` - Regex matching
- `match` - Match another field
- `number` - Numeric only
- `url` - Valid URL
- `phone` - 10-digit phone
- `custom` - Your own logic

## Common Use Cases

### Password Confirmation

```tsx
[
  { name: "password", type: "password", label: "Password" },
  { 
    name: "confirmPassword", 
    type: "password",
    label: "Confirm Password",
    validators: [
      { type: "match", matchField: "password", message: "Passwords don't match" }
    ]
  }
]
```

### Async Validation

Check username availability, email existence, etc:

```tsx
{
  name: "username",
  validators: [{
    type: "custom",
    message: "Username taken",
    custom: async (value) => {
      const res = await fetch(`/api/check?user=${value}`);
      return res.ok;
    }
  }]
}
```

### Validation Timing

```tsx
// Validate while typing (300ms debounce)
<DynamicForm validationMode="onChange" />

// Validate on blur (default)
<DynamicForm validationMode="onBlur" />

// Validate only on submit
<DynamicForm validationMode="onSubmit" />
```

### Select & Radio Fields

```tsx
{
  name: "country",
  type: "select",
  label: "Country",
  options: [
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" }
  ]
}
```

## Advanced Features

### Custom Validation

Access form data and run any logic:

```tsx
{
  type: "custom",
  message: "Error message",
  custom: (value, allFormData) => {
    // Return true if valid, false if invalid
    return value.length > 3 && !value.includes('@');
  }
}
```

### Async Form Submission

```tsx
<DynamicForm
  onSubmit={async (values) => {
    await saveToAPI(values);
  }}
  submitThrottleMs={1500}  // Prevent double-submit
/>
```

### Supported Input Types

**Text:** `text`, `email`, `password`, `number`, `tel`, `url`, `date`  
**Complex:** `textarea`, `select`, `checkbox`, `radio`

## Props Reference
## 🎨 Theming

FormGuardian comes with 8 beautiful themes:

| Theme     | Style         | Primary Color | Best For                |
|-----------|--------------|--------------|-------------------------|
| modern    | Vibrant blue  | #1e40af      | Default, all-purpose    |
| dark      | Dark mode     | #f43f5e      | Night, accessibility    |
| minimal   | Minimalist    | #d946ef      | Clean, distraction-free |
| gradient  | Gradient      | #ec4899      | Modern, creative        |
| ocean     | Blue/teal     | #0ea5e9      | Calm, professional      |
| sunset    | Orange/pink   | #f97316      | Warm, friendly          |
| purple    | Purple/pink   | #a78bfa      | Elegant, creative       |
| forest    | Green/earthy  | #059669      | Natural, organic        |

**Usage:**

```tsx
import { DynamicForm } from 'formguardian-react';

// Use a built-in theme by name (default is 'modern')
<DynamicForm theme="ocean" ... />

// Use a custom theme object
import { oceanTheme } from 'formguardian-react/themes';
<DynamicForm theme={oceanTheme} ... />
```

All themeable colors, spacing, and fonts are handled automatically. No extra setup required.

### DynamicForm

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fields` | `FieldConfig[]` | Required | Form field definitions |
| `onSubmit` | `function` | Required | Submit handler |
| `validationMode` | `'onChange' \| 'onBlur' \| 'onSubmit'` | `'onBlur'` | When to validate |
| `submitButtonText` | `string` | `'Submit'` | Submit button label |
| `submitThrottleMs` | `number` | `1000` | Throttle between submits |
| `disabled` | `boolean` | `false` | Disable entire form |

### FieldConfig

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | `string` | ✓ | Unique identifier |
| `type` | `string` | - | Input type |
| `label` | `string` | - | Field label |
| `validators` | `array` | - | Validation rules |
| `required` | `boolean` | - | Mark required |
| `placeholder` | `string` | - | Placeholder text |
| `defaultValue` | `any` | - | Initial value |
| `options` | `array` | - | For select/radio |

## Troubleshooting

**Validators not running?**  
Ensure your field has a `name`, and validators use correct types (`'required'`, not `'require'`)

**Need to validate against another field?**  
Use `{ type: "match", matchField: "otherFieldName" }`

**Custom validator not working?**  
Must return `boolean` or `Promise<boolean>`

## Example

See [`src/components/EXAMPLE_ADVANCED_FORM.tsx`](src/components/EXAMPLE_ADVANCED_FORM.tsx) for a complete real-world form.

## License

MIT © [Himanshu Sinha](LICENSE)