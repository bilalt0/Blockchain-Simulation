 # Basit Blockchain Simülasyonu

Bu proje, JavaScript ile oluşturulmuş basit bir blokzincir simülasyonudur. Blockchain’in temel çalışma mantığını anlamak için hazırlanmıştır. Blok oluşturma, hashing (özetleme) ve blokların birbirine bağlanması gibi temel prensipleri gösterir.

# Özellikler

**Genesis (İlk) Blok**: Zincirdeki ilk blok otomatik olarak oluşturulur.
**Blok Yapısı**: Her blok; index, zaman damgası (timestamp), veri (data), bir önceki bloğun hash’i ve kendi hash’ini içerir.
**Bütünlük Kontrolü**: SHA-256 algoritması kullanılarak verilerin değiştirilmediği doğrulanır.
**Etkileşimli Menü**: Komut satırı üzerinden blokzincir ile etkileşim kurmanızı sağlar.
- Özel veri girerek yeni blok oluşturabilirsiniz.
- Tüm blockchain’i görüntüleyebilirsiniz.

## Başlangıç
## Gereksinimler

- Bilgisayarınızda Node.js kurulu olmalıdır.

# Kurulum

1. Depoyu (repository) klonlayın.
2. Proje klasörüne girin.
3. Bağımlılıkları yükleyin:
  '''bash
  npm install
  '''

### Kullanım

Uygulamayı çalıştırmak için:

'''bash
node index.js
'''

Ekranda çıkan menüyü takip ederek yeni bloklar ekleyebilir veya zinciri görüntüleyebilirsiniz.