import type { Money, PaymentAdapter } from "./types.js";

function stub(id: PaymentAdapter["id"]): PaymentAdapter {
  return {
    id,
    async createInvoice(amount: Money, memo?: string) {
      return {
        paymentId: `${id}-stub-${amount.amountSats}`,
        payload: JSON.stringify({ id, amountSats: amount.amountSats.toString(), memo: memo ?? null, stub: true }),
      };
    },
    async getStatus() {
      return "pending";
    },
  };
}

export const mainchainStub = stub("mainchain");
export const lightningStub = stub("lightning");
export const cashuStub = stub("cashu");
