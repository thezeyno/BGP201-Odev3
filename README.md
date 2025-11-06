TypeScript BGP201 Dersi 3. Ödev Çözümleri

| Soru | Konsept | Açıklama |
| :--- | :--- | :--- |
| *Soru 1* | Jenerik Dizi Birleştirme | İki farklı tipte diziyi alıp tek bir dizide birleştiren mergeArrays fonksiyonunun Jenerik tiplerle implementasyonu. |
| *Soru 2* | Tip Koruyucuları | Car ve Truck tiplerini ayırmak için in operatörü (tip koruyucusu) kullanan useVehicle fonksiyonunun implementasyonu. |
| *Soru 3* | Sınıf ve Erişim Belirleyiciler | logHistory dizisinin dışarıdan erişilememesi için private erişim belirleyicisi kullanılan Logger sınıfının implementasyonu. |
| *Soru 4* | keyof ile Jenerik Fonksiyon | Bir nesne ve o nesnenin bir anahtarını alan getProperty fonksiyonunun, keyof operatörü ile tip güvenliği sağlanarak implementasyonu. |
| *Soru 5* | Fonksiyon Aşırı Yüklemesi | ID veya isimle arama yapmaya izin veren, aşırı yüklenmiş (overloaded) search fonksiyonunun implementasyonu. |
| *Soru 6* | Jenerik Sınıf Implementasyonu | set, get ve clear metotlarını içeren jenerik MemoryCache sınıfının implementasyonu. |
| *Soru 7* | Partial ile Güncelleme | Partial<User> ile kısmi güncellemeyi kabul eden ve Readonly<User> olarak döndüren updateUser fonksiyonunun implementasyonu. |
| *Soru 8* | Rest Parametreleri | Aldığı tüm sayısal parametreleri ...numbers: number sözdizimi ile toplayan sum fonksiyonunun implementasyonu. |
| *Soru 9* | Soyut Sınıf | getArea adında soyut bir metoda sahip Shape sınıfı ve ondan türeyen Circle sınıfının implementasyonu. |
| *Soru 10* | Statik Özellikler ve Metotlar | Statik PI özelliğini ve calculateCircumference statik metodunu içeren MathHelper sınıfının implementasyonu. |
| *Soru 11* | Koşullu Tipler | Promise içindeki tipi çözen, T extends Promise<infer U> ? U : T formülüne sahip UnwrapPromise<T> tip tanımı. |
| *Soru 12* | infer ile Fonksiyon Dönüş Tipi | infer anahtar kelimesi kullanılarak fonksiyonun dönüş tipini çıkaran (ReturnType<T>) GetReturnType<T> tip tanımı. |
| *Soru 13* | Mapped Types & Template Literals | { id: number } özelliğini { getId: () => number } metoduna dönüştüren CreateGetters<T> tip tanımı. |
| *Soru 14* | Rekürsif Tipler | İç içe nesneleri de readonly yapacak şekilde tasarlanan DeepReadonly<T> rekürsif tip tanımı. |
| *Soru 15* | Mapped Types ile Filtreleme | Bir nesne içinden, değeri (V) belirtilen tipe uyan özellikleri seçen PickByValueType<T, V> tip tanımı. |
| *Soru 16* | Nominal Tipleme | Temelde aynı olan (string) ama birbirine atanamayan markalı tiplerin (Brand<T, U>) tanımı. |
| *Soru 17* | Dağıtılmış Koşullu Tipler | Bir Birleşimden, belirtilen tiplere atanabilen üyeleri çıkaran FilterUnion<T, U> tip tanımı. |
| *Soru 18* | infer ile Son Parametre | Bir fonksiyonun imzasından son parametresinin tipini çıkaran LastParameter<T> tip tanımı. |
| *Soru 19* | infer ile Dizi Elemanı Tipi | Eğer T bir dizi ise eleman tipini, değilse T'nin kendisini döndüren Flatten<T> tip tanımı. |
| *Soru 20* | Template Literal Parsing | "/users/:id" gibi bir string'i alıp { id: string } gibi bir nesne tipine dönüştüren rekürsif ParseRouteParams<T> tip tanımı. |
