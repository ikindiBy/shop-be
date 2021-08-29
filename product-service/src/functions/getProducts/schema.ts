export default {
  type: "object",
  properties: {
    goods: { type: 'string' }
  },
  required: ['goods']
} as const;
