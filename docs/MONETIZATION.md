# Monetization Model
**Transaction Flow:**
Student Payment ($550)
- Platform ($50 commission)
- Tutor Payout ($500 after session)
**Commission Logic:**
```javascript
function calculatePayout(amount) {
    const commission = amount * 0.10;
    const tutorPayout = amount - commission;
    return { commission, tutorPayout };
}
// Example: $500 session
// { commission: 50, tutorPayout: 450 }
```
