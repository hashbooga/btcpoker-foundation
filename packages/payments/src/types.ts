export type Money = { amountSats: bigint; asset: "btc" };

export interface PaymentAdapter {
  readonly id: "mainchain" | "lightning" | "cashu";
  /** Create an invoice / payment request for a table buy-in or transfer. */
  createInvoice(amount: Money, memo?: string): Promise<{ paymentId: string; payload: string }>;
  /** Check whether a payment settled. */
  getStatus(paymentId: string): Promise<"pending" | "settled" | "expired" | "failed">;
}
