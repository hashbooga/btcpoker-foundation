/**
 * Minimal client stub. UI polish is explicitly deferred.
 * Wire to @btcpoker/server when the transport exists.
 */
export type TableView = {
  tableId: string;
  seats: number;
  status: "lobby" | "in_hand" | "paused";
};

export function createLobbyView(tableId: string, seats = 6): TableView {
  return { tableId, seats, status: "lobby" };
}
