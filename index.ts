// Event katılım verisi için tip tanımı
export interface AttendanceEvent {
  id: string;
  eventName: string;
  date: string; // ISO 8601 format
  location: string;
  attended: boolean;
}

// Kullanıcı istatistikleri için tip tanımı
export interface UserStats {
  totalEventsAttended: number;
  totalEventsAvailable: number;
}

// Genel istatistikler için tip tanımı
export interface GlobalStats {
  totalAttendances: number;
  totalUniqueUsers: number;
}

// Aktif etkinlik bilgisi için tip tanımı
export interface CurrentEvent {
  id: string;
  name: string;
  date: string;
  description: string;
  isActive: boolean;
}
