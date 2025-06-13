'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

type AnimatedOnScrollProps = {
    children: ReactNode;
    delay?: number;
};

// Komponen reusable untuk animasi saat scroll
const AnimatedOnScroll = ({ children, delay = 0 }: AnimatedOnScrollProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
};


const KamusArray = [
    {
        nama: "A",
        deskripsi: "Istilah-istilah pemasaran digital yang dimulai dengan huruf A, seperti strategi dasar hingga teknik konversi.",
        KamusContent: [
            {
                title: "Audience Demographics",
                content:
                    "Audience Demographics adalah langkah penting untuk meningkatkan efektivitas kampanye tentang siapa, apa yang dibutuhkan, dan bagaimana cara menjangkaunya.",
            },
            {
                title: "Affiliate Marketing",
                content:
                    "Affiliate marketing adalah sebuah model bisnis di mana Anda, sebagai seorang afiliasi, mempromosikan produk atau layanan orang lain melalui tautan unik.",
            },
            {
                title: "Audience Targeting",
                content:
                    "Audience Targeting adalah proses identifikasi konsumen potensial berdasarkan karakteristik tertentu, seperti demografi, minat, perilaku, dan lokasi geografis.",
            },
            {
                title: "A/B Testing",
                content:
                    "A/B Testing adalah metode eksperimental yang digunakan dalam pemasaran digital, pengembangan produk, dan desain web untuk membandingkan dua versi dari sebuah elemen.",
            },
            {
                title: "Authenticity",
                content:
                    "Authenticity adalah keaslian atau ketulusan dalam menyampaikan pesan, baik melalui konten, produk, maupun interaksi dengan audiens.",
            },
            {
                title: "Affiliate Link",
                content:
                    "Affiliate link adalah tautan unik yang digunakan oleh afiliasi untuk mempromosikan produk atau layanan dari suatu perusahaan.",
            },
            {
                title: "Audience Insights",
                content:
                    "Audience insights adalah informasi yang diperoleh dari data tentang audiens yang memungkinkan pemasar memahami preferensi, perilaku, dan kebutuhan mereka.",
            },
            {
                title: "Approval",
                content:
                    "Approval adalah langkah dalam siklus pembuatan konten pemasaran yang telah melewati tinjauan dari tim kreatif hingga disetujui untuk dipublikasikan.",
            },
            {
                title: "Audience Age",
                content:
                    "Audience Age merujuk pada usia rata-rata atau kelompok usia dari audiens yang berinteraksi dengan sebuah merek, konten, atau kampanye pemasaran.",
            },
            {
                title: "Agreement Letter",
                content:
                    "Agreement Letter adalah dokumen tertulis yang digunakan untuk meresmikan kesepakatan antara dua atau lebih pihak.",
            },
            {
                title: "Approach",
                content:
                    "Approach adalah cara atau metode yang digunakan untuk menangani suatu situasi, tantangan, atau masalah tertentu.",
            },
            {
                title: "Attendance",
                content:
                    "Attendance merujuk pada kehadiran KOL dalam event, kampanye, atau aktivitas promosi brand, yang bertujuan untuk meningkatkan visibilitas dan engagement audiens.",
            },
            {
                title: "Average Order Value (AOV)",
                content:
                    "Pelajari apa itu AOV (Average Order Value), cara menghitungnya, dan mengapa metrik ini sangat penting untuk mengoptimalkan strategi bisnis Anda.",
            },
            {
                title: "Affiliate Program",
                content:
                    "Affiliate program adalah model pemasaran di mana seorang individu atau perusahaan mendapatkan komisi dengan mempromosikan produk atau layanan pihak lain.",
            },
            {
                title: "Average Basket Size",
                content:
                    "Temukan cara cepat menghitung Average Basket Size dan strategi ampuhnya.",
            },
        ],
    },

    {
        nama: "B",
        deskripsi: "Huruf B mencakup istilah branding, strategi kampanye, serta panduan kerja sama antara brand dan KOL.",
        KamusContent: [
            {
                title: "Brand Awareness",
                content:
                    "Pengertian Brand Awareness adalah tingkat keakraban konsumen terhadap produk atau jasa yang ditawarkan oleh sebuah brand.",
            },
            {
                title: "Brand Ambassador",
                content:
                    "Brand Ambassador adalah seorang selebriti, influencer, atau orang yang memiliki pengaruh besar di komunitasnya.",
            },
            {
                title: "Brand Messaging",
                content:
                    "Brand messaging adalah serangkaian pernyataan atau pesan yang digunakan perusahaan untuk berkomunikasi dengan audiensnya.",
            },
            {
                title: "Brand Affinity",
                content:
                    "Brand affinity adalah tingkat keterikatan emosional yang konsumen rasakan terhadap sebuah merek.",
            },
            {
                title: "Budget Allocation",
                content:
                    "Budget Allocation mengacu pada proses perencanaan dan distribusi sumber daya keuangan ke berbagai area bisnis atau aktivitas Anda.",
            },
            {
                title: "Brand Lift",
                content:
                    "Brand lift adalah peningkatan persepsi dan kesadaran konsumen terhadap sebuah merek setelah mereka terpapar oleh kampanye iklan.",
            },
            {
                title: "Branded Content",
                content:
                    "Branded content adalah pendekatan pemasaran yang bertujuan untuk menciptakan konten yang relevan dan bernilai bagi audiens.",
            },
            {
                title: "Brand Consistency",
                content:
                    "Brand consistency adalah upaya untuk menjaga semua elemen suatu brand untuk selalu konsisten di semua saluran komunikasi dan interaksi dengan pelanggan.",
            },
            {
                title: "Brand Voice",
                content:
                    "Brand voice adalah cara suatu merek berkomunikasi dengan audiensnya melalui berbagai saluran pemasaran.",
            },
            {
                title: "Brand Positioning",
                content:
                    "Brand positioning adalah strategi yang digunakan oleh sebuah perusahaan untuk menempatkan merek di benak konsumen, berbeda dari pesaing lainnya.",
            },
            {
                title: "Boost Code Ads",
                content:
                    "Boost Code Ads adalah teknik yang digunakan untuk mempercepat atau meningkatkan performa iklan digital menggunakan kode atau mekanisme tertentu.",
            },
            {
                title: "Barter",
                content:
                    "Barter sering dilakukan sebagai bentuk kolaborasi, di mana KOL menawarkan promosi atau ulasan produk sebagai imbalan atas barang atau jasa dari suatu brand.",
            },
            {
                title: "Blacklist",
                content:
                    "Blacklist adalah daftar individu, akun, atau entitas yang dianggap tidak diinginkan, tidak dapat dipercaya, atau melanggar aturan tertentu.",
            },
            {
                title: "Brief",
                content:
                    "Brief adalah dokumen atau panduan singkat yang berisi informasi dan instruksi mengenai suatu kampanye dalam konteks media sosial dan pemasaran melalui KOL.",
            },
            {
                title: "Brand Identity",
                content:
                    "Brand identity adalah kumpulan elemen visual dan non-visual yang membedakan suatu merek dari yang lain.",
            },
            {
                title: "Brand Collaboration",
                content:
                    "Brand collaboration adalah kerja sama antara dua atau lebih merek untuk menciptakan produk, layanan, atau kampanye bersama yang menguntungkan semua pihak.",
            },
            {
                title: "Brand Loyalty",
                content:
                    "Brand loyalty adalah konsep yang menggambarkan tingkat keterikatan dan kesetiaan konsumen terhadap suatu merek atau brand.",
            },
            {
                title: "Brand Advocacy",
                content:
                    "Brand advocacy adalah strategi pemasaran yang melibatkan pelanggan atau individu yang dengan sukarela mempromosikan dan merekomendasikan suatu merek kepada orang lain.",
            },
            {
                title: "Boosted Post",
                content:
                    "Boosted post adalah salah satu fitur dalam platform media sosial yang memungkinkan pengguna untuk mempromosikan unggahan mereka agar menjangkau lebih banyak audiens.",
            },
            {
                title: "Brand Perception",
                content:
                    "Brand perception adalah cara pelanggan memandang dan menilai suatu merek berdasarkan pengalaman, opini, dan interaksi yang mereka miliki dengan merek tersebut.",
            },
            {
                title: "Brand Engagement",
                content:
                    "Brand engagement adalah tingkat interaksi dan keterlibatan pelanggan dengan merek serta mencerminkan keterikatan emosional yang mendorong pelanggan terus terhubung.",
            },
        ],
    },

    {
        nama: "C",
        deskripsi: "Istilah-istilah pemasaran digital yang dimulai dengan huruf A, seperti strategi dasar hingga teknik konversi.",
        KamusContent: [
            {
                title: "Content Marketing",
                content: "Content marketing adalah strategi pemasaran yang berfokus pada pembuatan dan distribusi konten yang relevan, konsisten, dan bernilai untuk menarik audiens."
            },
            {
                title: "Campaign Performance",
                content: "Campaign performance adalah proses evaluasi efektivitas kampanye pemasaran berdasarkan metrik seperti jangkauan, engagement, dan konversi."
            },
            {
                title: "Click-Through Rate (CTR)",
                content: "Click-through rate (CTR) adalah persentase jumlah klik terhadap jumlah tayangan atau impresi dalam sebuah kampanye digital."
            },
            {
                title: "Collaboration",
                content: "Collaboration adalah kerja sama antara dua pihak atau lebih, seperti brand dan influencer, untuk mencapai tujuan bersama dalam kampanye pemasaran."
            },
            {
                title: "Call to Action (CTA)",
                content: "Call to Action (CTA) adalah instruksi atau ajakan kepada audiens untuk melakukan tindakan tertentu, seperti mengklik tautan, membeli produk, atau mengisi formulir."
            },
            {
                title: "Conversion Rate",
                content: "Conversion rate adalah persentase pengunjung yang melakukan tindakan yang diinginkan, seperti pembelian atau pendaftaran, dari total pengunjung."
            },
            {
                title: "Content Creator",
                content: "Content creator adalah individu yang membuat dan membagikan konten digital di berbagai platform, baik untuk tujuan pribadi maupun profesional."
            },
            {
                title: "Campaign Brief",
                content: "Campaign brief adalah dokumen singkat yang menjelaskan tujuan, target, dan strategi kampanye pemasaran untuk influencer atau tim kreatif."
            },
            {
                title: "Content Pillars",
                content: "Content pillars adalah tema-tema utama yang menjadi dasar pembuatan konten yang konsisten dan relevan dalam strategi pemasaran digital."
            },
            {
                title: "Community Engagement",
                content: "Community engagement adalah interaksi aktif antara brand dengan komunitas atau audiens untuk membangun hubungan yang lebih kuat dan loyal."
            }
        ]
    },
    {
        nama: "D",
        deskripsi: "Kategori ini fokus pada taktik konversi dan kolaborasi antara brand dan KOL.",
        KamusContent: [
            {
                title: "Demographic Targeting",
                content: "Demographic targeting adalah strategi pemasaran yang memfokuskan promosi berdasarkan data demografis seperti usia, jenis kelamin, pekerjaan, dan lokasi."
            },
            {
                title: "Digital Marketing",
                content: "Digital marketing adalah pemasaran yang dilakukan melalui media digital seperti media sosial, email, situs web, dan mesin pencari."
            },
            {
                title: "Discount Code",
                content: "Discount code adalah kode unik yang diberikan kepada pelanggan untuk mendapatkan potongan harga pada pembelian produk atau layanan tertentu."
            },
            {
                title: "Display Ads",
                content: "Display ads adalah iklan visual yang muncul di halaman web dalam bentuk banner, gambar, atau video, biasanya melalui jaringan periklanan seperti Google Ads."
            },
            {
                title: "Drop Rate",
                content: "Drop rate adalah persentase audiens yang berhenti mengikuti, berhenti menonton, atau tidak melanjutkan tindakan selama kampanye berlangsung."
            },
            {
                title: "Deadline",
                content: "Deadline adalah batas waktu akhir yang telah ditentukan untuk menyelesaikan suatu tugas, proyek, atau kampanye."
            },
            {
                title: "Data Analytics",
                content: "Data analytics adalah proses menganalisis data untuk memperoleh wawasan yang dapat digunakan untuk pengambilan keputusan dalam pemasaran."
            },
            {
                title: "Direct Message (DM)",
                content: "Direct message adalah pesan pribadi yang dikirimkan langsung antar pengguna dalam platform media sosial seperti Instagram atau Twitter."
            },
            {
                title: "Deliverables",
                content: "Deliverables adalah hasil atau output yang dijanjikan untuk diserahkan kepada klien atau stakeholder, seperti konten, laporan, atau kampanye."
            },
            {
                title: "Dashboard",
                content: "Dashboard adalah antarmuka visual yang menyajikan data secara ringkas dan interaktif untuk membantu dalam pengambilan keputusan."
            }
        ]
    },
    {
        nama: "E",
        deskripsi: "E berfokus pada interaksi pengguna seperti likes, comments, dan shares.",
        KamusContent: [
            { title: "Engagement Rate", content: "Engagement rate adalah salah satu metrik penting dalam dunia pemasaran secara digital, terutama di platform media sosial." },
            { title: "Earned Media", content: "Earned Media adalah bentuk promosi yang tidak dibayar dan tidak dimiliki oleh merek, tetapi diperoleh melalui upaya komunikasi dan interaksi dengan audiens atau media lain." },
            { title: "Engagement Pods", content: "Engagement pods adalah kelompok atau komunitas di media sosial yang anggotanya bekerja sama untuk meningkatkan engagement pada postingan masing-masing." },
            { title: "Engagement Optimization", content: "Engagement Optimization adalah serangkaian strategi dan teknik yang digunakan untuk meningkatkan interaksi antara audiens dan konten." },
            { title: "Endorsement", content: "Endorsement adalah strategi pemasaran yang menggunakan pengaruh individu, seperti selebriti, influencer, atau tokoh publik untuk mempromosikan produk atau layanan." },
            { title: "EGC", content: "Employee-Generated Content (EGC) adalah konten yang dibuat oleh karyawan suatu perusahaan di media sosial." }
        ]
    },
    {
        nama: "F",
        deskripsi: "Huruf F menyoroti audiens loyal seperti followers dan subscriber.",
        KamusContent: [
            { title: "Follower Growth", content: "Follower Growth adalah istilah yang digunakan untuk menggambarkan peningkatan jumlah pengikut atau subscriber pada platform media sosial." },
            { title: "Follower Loyalty", content: "Follower Loyalty adalah tingkat keterikatan dan kesetiaan pengikut yang bukan hanya sekadar mengikuti akun, tetapi juga mencakup respons konten yang dibuat." },
            { title: "Follower", content: "Pengertian follower mengacu pada seseorang atau akun yang secara aktif mengikuti akun lain di platform media sosial." },
            { title: "Followers Growth", content: "Followers growth secara sederhana mengacu pada pertumbuhan jumlah pengikut (followers) pada akun media sosial dari waktu ke waktu." },
            { title: "Followers Location", content: "Followers Location adalah data yang menunjukkan lokasi geografis pengikut atau audiens dari akun media sosial tertentu." },
            { title: "Followers Distribution", content: "Followers distribution adalah salah satu aspek penting yang sering kali diabaikan ketika membahas strategi pemasaran digital, terutama di media sosial." },
            { title: "Followers Demographics", content: "Followers Demographics adalah data demografis yang mengidentifikasi karakteristik pengikut di media sosial seperti usia, jenis kelamin, lokasi, dan minat pengikut." },
            { title: "FYP TikTok", content: "Sistem FYP TikTok menghadirkan konten yang sesuai dengan selera Anda." },
            { title: "FB Pro", content: "Fb Pro adalah fitur yang memungkinkan pengguna untuk mengoptimalkan dan memonetisasi karya mereka." },
            { title: "Finfluencer", content: "Finfluencer adalah influencer yang membagikan wawasan dan edukasi terkait keuangan." }
        ]
    },
    {
        nama: "G",
        deskripsi: "Topik mengenai pertumbuhan akun, followers, dan reach dibahas pada huruf G.",
        KamusContent: [
            { title: "Geotagging", content: "Geotagging adalah proses menambahkan informasi geografis ke dalam media digital, seperti foto, video, atau status di media sosial." },
            { title: "Giveaway", content: "Giveaway adalah bentuk promosi di mana perusahaan, bisnis, atau individu memberikan hadiah secara gratis kepada audiens atau pelanggan dengan syarat tertentu." },
            { title: "Ghosting", content: "Ghosting adalah istilah yang digunakan untuk menggambarkan situasi di mana seseorang menghilang tanpa memberikan penjelasan atau pemberitahuan kepada orang lain." },
            { title: "Guaranteed Views", content: "Pelajari cara kerja Guaranteed Views untuk optimalkan pemasaran Anda." }
        ]
    },
    {
        nama: "H",
        deskripsi: "H menjelaskan penggunaan hashtag dan alat bantu jangkauan konten.",
        KamusContent: [
            { title: "Hashtag", content: "Hashtag adalah simbol tanda pagar yang diikuti oleh kata atau frasa tanpa spasi di media sosial untuk mengelompokkan konten berdasarkan topik tertentu." },
            { title: "Homeless Media", content: "Homeless Media menyajikan berita terbaru dengan waktu yang cepat melalui media sosial." },
            { title: "Hook Content", content: "Pelajari cara membuat hook konten yang menarik untuk meningkatkan engagement di media sosial." }
        ]
    },
    {
        nama: "I",
        deskripsi: "Huruf I mencakup pengukuran visibilitas dan performa awal seperti impression.",
        KamusContent: [
            { title: "Influencer", content: "Influencer adalah individu yang memiliki pengaruh besar di dunia digital, terutama melalui media sosial." },
            { title: "Impressions", content: "Impressions adalah jumlah total tampilan atau penayangan sebuah konten, iklan, atau postingan kepada pengguna." },
            { title: "Influencer Marketing Platform", content: "Influencer Marketing Platform adalah sebuah teknologi berbasis web atau aplikasi yang dirancang untuk menjalankan, mengelola, dan mengoptimalkan kampanye marketing." },
            { title: "Influencer Outreach", content: "Influencer Outreach adalah proses mengidentifikasi, menjangkau, dan membangun hubungan dengan para influencer untuk tujuan pemasaran atau promosi." },
            { title: "Influencer Agreement", content: "Influencer Agreement adalah elemen krusial dalam pemasaran influencer karena membantu menghindari kesalahpahaman dan potensi konflik." },
            { title: "Influencer Contract", content: "Influencer contract adalah perjanjian tertulis yang mengikat antara company atau brand dengan seorang influencer, yang bertujuan untuk mengatur segala aspek kerja sama." },
            { title: "Influencer Vetting", content: "Influencer Vetting adalah proses evaluasi dan pemilihan influencer berdasarkan kriteria untuk menentukan apakah mereka sesuai dengan tujuan dan nilai brand." },
            { title: "Influencer Tiering", content: "Influencer tiering secara sederhana adalah metode pengelompokan influencer. Pengelompokkan ini dilakukan berdasarkan beberapa parameter." },
            { title: "Influencer Fatigue", content: "Influencer Fatigue adalah kondisi audiens mulai merasa bosan dengan konten oleh influencer, terutama yang berfokus pada promosi produk atau layanan tertentu." },
            { title: "Influencer Fraud Detection", content: "Influencer Fraud Detection adalah proses mengidentifikasi aktivitas penipuan atau manipulatif yang dilakukan oleh influencer untuk menipu brand atau perusahaan." },
            { title: "Influencer Onboarding", content: "Influencer Onboarding adalah tahap merek memperkenalkan influencer ke visi, misi, dan nilai-nilai perusahaan serta harapan dan tujuan kampanye kolaboratif." },
            { title: "Influencer Brief", content: "Influencer Brief adalah panduan yang diberikan kepada influencer untuk menjelaskan apa yang diharapkan dari mereka selama kampanye pemasaran." },
            { title: "Influencer Gifting", content: "Influencer gifting adalah strategi pemasaran di mana bisnis atau merek mengirimkan produk atau layanan gratis kepada influencer." },
            { title: "Influencer Guidelines", content: "Influencer guidelines adalah panduan tertulis yang diberikan oleh sebuah merek atau bisnis kepada influencer sebelum memulai kerja sama untuk kampanye promosi." },
            { title: "Influencer Activation", content: "Influencer activation adalah strategi pemasaran yang melibatkan aktivasi influencer dalam kampanye yang dirancang untuk mempromosikan produk atau layanan." },
            { title: "Influencer Discovery", content: "Influencer Discovery adalah proses identifikasi dan pencarian individu berpengaruh di platform media sosial yang sesuai dengan target audiens suatu merek." },
            { title: "Influencer Collaboration", content: "Influencer collaboration adalah strategi pemasaran sebuah merek bekerja sama dengan influencer untuk menciptakan konten yang mempromosikan produk atau layanan." },
            { title: "Influencer Alignment", content: "Influencer alignment mengacu pada penyelarasan antara nilai-nilai, visi, dan pesan dari sebuah merek dengan karakter dan gaya konten dari seorang influencer." },
            { title: "Influencer Compensation", content: "Influencer compensation adalah bentuk pembayaran atau imbalan yang diberikan kepada influencer atas kerjasama promosi yang mereka buat untuk suatu merek." },
            { title: "Influencer Briefing", content: "Influencer briefing adalah dokumen atau panduan yang disusun oleh merek atau agensi untuk memberikan arahan kepada influencer." },
            { title: "Influencer Retention", content: "Influencer retention adalah mempertahankan hubungan baik dengan influencer agar tetap loyal dan terus bekerja sama dengan brand dalam berbagai kampanye." },
            { title: "Influencer ROI Calculation", content: "Influencer ROI Calculation adalah proses perhitungan yang digunakan untuk menentukan seberapa efektif kolaborasi Anda dengan influencer." },
            { title: "Indemnity", content: "Indemnity adalah perjanjian atau kontrak di mana satu pihak setuju untuk menanggung kerugian atau kerusakan yang mungkin dialami oleh pihak lain." },
            { title: "Instagram Story", content: "Instagram Story adalah fitur di Instagram yang memungkinkan pengguna untuk membagikan foto atau video singkat yang hanya tampil dalam 24 jam saja." },
            { title: "Instagram Feed", content: "Instagram feed adalah salah satu elemen penting dalam platform media sosial Instagram yang menjadi pusat dari segala aktivitas visual." },
            { title: "Instagram Reels", content: "Instagram Reels adalah fitur Instagram untuk memungkinkan pengguna membuat dan membagikan video pendek yang dapat disertai dengan musik, teks, dan efek kreatif." },
            { title: "Insight", content: "Insight adalah pemahaman mendalam yang diperoleh melalui analisis data atau informasi." },
            { title: "Influencer Marketing", content: "Influencer marketing adalah strategi pemasaran yang melibatkan individu berpengaruh atau influencer untuk mempromosikan produk atau layanan." },
            { title: "IGTV (Instagram TV)", content: "IGTV (Instagram TV) adalah platform berbasis video yang diciptakan oleh Instagram untuk mengunggah video dengan durasi yang lebih panjang." },
            { title: "Influencer Platform", content: "Influencer platform adalah sebuah sistem atau layanan berbasis teknologi yang memfasilitasi kolaborasi antara merek dan influencer." }
        ]
    },

    {
        nama: "J",
        deskripsi: "J mencakup platform atau metode jangkauan audiens dalam kampanye digital.",
        KamusContent: [
        ]
    },
    {
        nama: "K",
        deskripsi: "K mencakup kata kunci penting seperti KOL dan KPI yang umum dalam pemasaran digital.",
        KamusContent: [
            { title: "KPI", content: "KPI atau Key Performance Indicators adalah metrik yang digunakan untuk mengukur keberhasilan KOL dalam mencapai tujuan kampanye pemasaran yang telah ditetapkan." },
            { title: "KOL", content: "KOL adalah individu yang memiliki keahlian, pengetahuan, atau pengaruh kuat dalam bidang tertentu, sehingga pendapat atau rekomendasinya dihargai oleh audiensnya." },
            { title: "Key Messaging", content: "Key messaging adalah pesan inti yang digunakan untuk menyampaikan informasi utama mengenai produk, layanan, organisasi, atau kampanye kepada audiens tertentu." },
            { title: "Kalkulator TikTok", content: "Cari tahu soal kalkulator TikTok untuk menghitung estimasi pendapatan dari akun TikTok." },
            { title: "KOL Specialist", content: "KOL Specialist membantu brand terhubung dengan influencer untuk meningkatkan visibilitas dan kepercayaan." },
            { title: "KOL Strategis", content: "KOL Strategis membantu merancang dan mengelola campaign yang punya dampak besar." },
            { title: "KOL Manager", content: "Pelajari apa itu KOL Manager, tanggung jawabnya, dan strategi sukses dalam mengelola Key Opinion Leader." },
            { title: "KOL Management", content: "Pelajari pentingnya KOL Management dan cara efektif mengelola hubungan dengan KOL untuk meningkatkan brand awareness." },
            { title: "KOL Exclusive", content: "KOL Exclusive berada di bawah manajemen untuk urusan kerja sama dan project yang masuk." },
            { title: "Key Opinion Consumer (KOC)", content: "Key Opinion Consumer: Pengertian, pentingnya dalam strategi pemasaran, dan cara bekerja sama dengan KOC." },
            { title: "Koin TikTok", content: "Koin TikTok adalah mata uang virtual resmi yang digunakan dalam aplikasi TikTok." }
        ]
    },

    {
        nama: "L",
        deskripsi: "L membahas tentang metrik performa seperti likes dan loyalty dari audiens.",
        KamusContent: [
            { title: "Live Streaming", content: "Live streaming adalah siaran video secara langsung melalui platform media sosial untuk berinteraksi langsung dengan audiens." },
            { title: "Like", content: "Like adalah bentuk interaksi pengguna terhadap konten di media sosial yang menunjukkan ketertarikan atau apresiasi." },
            { title: "Link in Bio", content: "Link in bio adalah tautan yang ditempatkan di bagian profil akun media sosial yang mengarahkan pengguna ke halaman atau konten tertentu." },
            { title: "Loyalty Program", content: "Loyalty Program adalah strategi pemasaran yang dirancang untuk mendorong pelanggan tetap setia melalui insentif dan hadiah." },
            { title: "Lead Generation", content: "Lead Generation adalah proses menarik minat audiens untuk menjadi calon pelanggan, terutama melalui konten dan kampanye digital." }
        ]
    },
    {
        nama: "M",
        deskripsi: "Huruf M merangkum metode pemasaran modern seperti micro influencer dan media planning.",
        KamusContent: [
            { title: "Micro Influencer", content: "Micro Influencer adalah individu dengan jumlah pengikut yang relatif kecil (biasanya 10K–100K), tetapi memiliki keterlibatan tinggi dan audiens yang loyal." },
            { title: "Macro Influencer", content: "Macro Influencer memiliki jumlah pengikut yang besar (100K–1M) dan menjangkau audiens yang lebih luas." },
            { title: "Mega Influencer", content: "Mega Influencer adalah selebritas media sosial dengan jutaan pengikut dan dampak yang luas dalam kampanye pemasaran." },
            { title: "Media Kit", content: "Media Kit adalah dokumen atau file digital yang merinci informasi penting tentang seorang influencer, termasuk statistik, tarif, dan portofolio kerja sama." },
            { title: "Monetization", content: "Monetization adalah proses menghasilkan pendapatan dari aktivitas atau konten digital, seperti melalui endorsement, iklan, atau fitur berbayar." },
            { title: "Mention", content: "Mention adalah fitur di media sosial yang memungkinkan pengguna menyebut akun lain, biasanya dengan simbol '@' diikuti nama pengguna." },
            { title: "Metrics", content: "Metrics adalah indikator atau data numerik yang digunakan untuk mengukur performa konten atau kampanye di media sosial." },
            { title: "Media Value", content: "Media Value adalah nilai estimasi promosi yang diberikan oleh influencer jika dibandingkan dengan iklan berbayar tradisional." }
        ]
    },
    {
        nama: "N",
        deskripsi: "N membahas tentang segmentasi dan spesialisasi konten melalui niche market.",
        KamusContent: [
            { title: "Niche", content: "Niche adalah segmen pasar yang spesifik dan terfokus di mana konten atau produk ditargetkan kepada audiens tertentu." },
            { title: "Nano Influencer", content: "Nano Influencer memiliki jumlah pengikut yang sangat kecil (<10K) namun biasanya memiliki hubungan yang sangat erat dan autentik dengan audiensnya." },
            { title: "Native Ads", content: "Native ads adalah iklan yang menyatu secara alami dengan konten di platform digital, sehingga tidak mengganggu pengalaman pengguna." },
            { title: "Netiquette", content: "Netiquette adalah etika atau tata krama dalam berkomunikasi di internet atau media sosial." }
        ]
    },
    {
        nama: "O",
        deskripsi: "Huruf O menjelaskan strategi optimasi dalam pemasaran digital dan konten.",
        KamusContent: [
            { title: "Organic Reach", content: "Organic reach adalah jumlah pengguna yang melihat konten tanpa menggunakan iklan berbayar." },
            { title: "Optimization", content: "Optimization dalam pemasaran digital adalah proses penyempurnaan strategi untuk mendapatkan hasil terbaik dari konten atau kampanye." },
            { title: "Outreach", content: "Outreach adalah proses menjalin komunikasi dengan pihak eksternal seperti media, influencer, atau komunitas untuk tujuan promosi atau kolaborasi." },
            { title: "Owned Media", content: "Owned media adalah saluran komunikasi digital yang dimiliki langsung oleh brand seperti website, blog, atau akun media sosial resmi." }
        ]
    },
    {
        nama: "P",
        deskripsi: "P mengulas strategi promosi, partnership, dan perencanaan konten digital.",
        KamusContent: [
            { title: "Paid Media", content: "Paid Media adalah segala bentuk promosi atau iklan berbayar yang digunakan oleh brand untuk menjangkau audiens." },
            { title: "Post Frequency", content: "Post Frequency adalah seberapa sering sebuah akun media sosial mempublikasikan konten dalam periode waktu tertentu." },
            { title: "Pitching", content: "Pitching adalah proses menawarkan ide atau proposal kolaborasi kepada pihak lain seperti brand atau influencer." },
            { title: "Partnership", content: "Partnership adalah kerja sama jangka pendek atau panjang antara brand dan influencer untuk mencapai tujuan pemasaran bersama." },
            { title: "Persona", content: "Persona adalah representasi fiktif dari audiens atau konsumen ideal berdasarkan data dan insight aktual." },
            { title: "Paid Partnership", content: "Paid partnership adalah bentuk kerja sama antara brand dan influencer di mana konten promosi disponsori secara langsung." },
            { title: "Performance Marketing", content: "Performance Marketing adalah pendekatan pemasaran berbasis hasil, seperti klik, penjualan, atau konversi." }
        ]
    },
    {
        nama: "Q",
        deskripsi: "Huruf Q merangkum kualitas dan standar dalam konten serta kampanye influencer.",
        KamusContent: [
            { title: "Q&A Content", content: "Q&A Content adalah format konten tanya jawab yang melibatkan interaksi antara influencer dan audiens." },
            { title: "Quality Score", content: "Quality Score adalah metrik yang digunakan untuk mengukur kualitas konten atau iklan berdasarkan relevansi, interaksi, dan performa." },
            { title: "Quota Reach", content: "Quota Reach adalah target atau batasan jumlah audiens yang harus dijangkau dalam kampanye digital atau kolaborasi dengan influencer." }
        ]
    },
    {
        nama: "R",
        deskripsi: "R membahas metrik evaluasi seperti reach dan ROI dalam pemasaran KOL.",
        KamusContent: [
            { title: "Reach", content: "Reach adalah jumlah total pengguna unik yang melihat suatu konten di media sosial." },
            { title: "Reels", content: "Reels adalah format video pendek di Instagram yang digunakan untuk membagikan konten kreatif secara cepat dan menarik." },
            { title: "ROI", content: "ROI atau Return on Investment adalah rasio yang mengukur keuntungan dari kampanye dibandingkan dengan biaya yang dikeluarkan." },
            { title: "Rate Card", content: "Rate card adalah daftar harga layanan atau biaya kerja sama dari seorang influencer untuk jenis konten tertentu." },
            { title: "Retention Rate", content: "Retention Rate adalah persentase audiens atau pelanggan yang tetap terlibat atau aktif selama periode tertentu." },
            { title: "Repost", content: "Repost adalah tindakan membagikan ulang konten dari pengguna lain di platform media sosial." },
            { title: "Review", content: "Review adalah ulasan atau opini yang diberikan terhadap produk atau layanan, sering kali digunakan dalam konten promosi oleh influencer." },
            { title: "Referral", content: "Referral adalah strategi di mana seseorang menyarankan atau mengarahkan orang lain untuk menggunakan suatu produk atau layanan." }
        ]
    },

    {
        nama: "S",
        deskripsi: "S mencakup elemen penting seperti storytelling dan strategi distribusi konten.",
        KamusContent: [
            { title: "Sponsored Post", content: "Konten yang dibuat kreator atas nama brand untuk promosi produk, layanan, atau kampanye." },
            { title: "Social Media Algorithm", content: "Aturan/platform logika yang menentukan bagaimana konten ditampilkan di media sosial." },
            { title: "Storytelling", content: "Seni menyampaikan cerita atau pesan secara menarik." },
            { title: "Social Media Analytics", content: "Proses analisis data untuk mengukur performa konten dan perilaku audiens." },
            { title: "Social Listening", content: "Memantau percakapan online untuk mengetahui opini publik terhadap suatu merek atau isu." },
            { title: "Social Proof", content: "Bukti sosial bahwa orang lain telah mencoba atau menyukai sesuatu." },
            { title: "Sentiment Analysis", content: "Teknik NLP dan teks analitik untuk memahami sentimen dari teks." },
            { title: "SOV", content: "Share of Voice, ukuran seberapa dominan suara atau eksposur brand di pasar." },
            { title: "Social Commerce", content: "Model bisnis yang memadukan media sosial dengan fitur e-commerce." },
            { title: "Social Media Monitoring", content: "Proses memantau dan menganalisis percakapan di media sosial." },
            { title: "Sponsored Stories", content: "Iklan berbayar yang berbentuk cerita di media sosial." },
            { title: "Social Media Strategy", content: "Rencana atau taktik untuk mencapai tujuan bisnis lewat media sosial." },
            { title: "Social Media Takeover", content: "Strategi di mana akun media sosial brand dikendalikan sementara oleh influencer." },
            { title: "SOW", content: "Statement of Work; dokumen resmi yang merinci lingkup, waktu, dan hasil pekerjaan." },
            { title: "Social Media Marketing", content: "Strategi pemasaran lewat konten media sosial." },
            { title: "Stories", content: "Fitur media sosial untuk membagikan foto/video singkat selama 24 jam." },
            { title: "Shadowban", content: "Penurunan visibilitas konten secara diam-diam oleh platform." },
            { title: "Story Views", content: "Jumlah pengguna yang melihat sebuah story." },
            { title: "Social Campaign", content: "Kampanye untuk mempengaruhi sikap/isu sosial melalui media sosial." },
            { title: "Social Media Trends", content: "Tren atau pola yang berkembang di platform media sosial." },
            { title: "Social Currency", content: "Nilai yang diperoleh melalui pengaruh sosial dan reputasi." },
            { title: "Social Engagement", content: "Interaksi pengguna dengan konten, seperti like, comment, dan share." },
            { title: "Social Media Specialist", content: "Profesional yang mengelola konten media sosial brand." },
            { title: "Social Media Strategist", content: "Orang yang merancang strategi jangka panjang media sosial brand." },
            { title: "Shopee Affiliate", content: "Program afiliasi untuk mempromosikan produk Shopee dan mendapat komisi." },
            { title: "SEO Specialist", content: "Orang yang bertugas meningkatkan visibilitas website di mesin pencari." },
            { title: "Shoppertainment", content: "Strategi pemasaran yang menggabungkan belanja dan hiburan." },
            { title: "Scrappy Content", content: "Konten otentik dan minim editan yang sering mendapat engagement tinggi." },
            { title: "SEA Marketing", content: "Strategi iklan berbayar menggunakan mesin pencari seperti Google." },
            { title: "SEM Specialist", content: "Spesialis yang mengelola iklan berbayar di mesin pencari." },
            { title: "Solo Katsu", content: "Istilah Jepang untuk menikmati waktu sendiri." },
            { title: "Soft Selling", content: "Strategi marketing yang lembut dan membangun hubungan emosional." }
        ]
    },
    {
        nama: "T",
        deskripsi: "Huruf T membahas tools dan teknik penting seperti tracking dan targeting.",
        KamusContent: [
            { title: "Trendspotting", content: "Proses mengidentifikasi dan memanfaatkan tren pasar." },
            { title: "Termination", content: "Pengakhiran kontrak atau hubungan kerja." },
            { title: "Tutorial", content: "Metode pengajaran bertahap untuk memahami konsep atau keterampilan." },
            { title: "Top Content", content: "Konten dengan performa dan daya tarik tinggi." },
            { title: "Take Off", content: "Momen saat sesuatu mulai berkembang pesat." },
            { title: "TikTok Shop", content: "Fitur e-commerce dalam TikTok yang memungkinkan pembelian langsung." },
            { title: "TikTok Live", content: "Fitur TikTok untuk siaran langsung ke pengikut." },
            { title: "Takeover", content: "Strategi menyerahkan kendali akun media sosial brand ke influencer." },
            { title: "Tier", content: "Sistem tingkatan atau klasifikasi." },
            { title: "Tone Of Voice", content: "Gaya penyampaian pesan dalam komunikasi brand." },
            { title: "Tutorial Video", content: "Konten video panduan atau instruksi." },
            { title: "Target Audience", content: "Kelompok sasaran utama dalam kampanye pemasaran." },
            { title: "Talent Management", content: "Proses mengelola talenta atau influencer dalam industri." },
            { title: "Trend Analysis", content: "Analisis pola historis untuk memprediksi tren masa depan." },
            { title: "TikTok Challenge", content: "Tantangan video kreatif di TikTok." },
            { title: "Trend Forecasting", content: "Proses memprediksi tren masa depan dari analisis data." },
            { title: "TikTok MCN", content: "Jaringan pengelola konten TikTok untuk bantu monetisasi." },
            { title: "TikTok Affiliate Program", content: "Program afiliasi di TikTok untuk menghasilkan uang dari promosi produk." },
            { title: "Trial Reels", content: "Fitur bagi kreator untuk mengunggah video uji coba." },
            { title: "TikTok Go", content: "Fitur afiliasi produk dari brand melalui TikTok." }
        ]
    },
    {
        nama: "U",
        deskripsi: "U mengulas user-generated content dan peran audiens dalam membentuk brand image.",
        KamusContent: [
            { title: "User Generated Content", content: "Konten yang dibuat pengguna, bukan oleh brand." },
            { title: "Usage Rights", content: "Hak penggunaan konten atau aset kreatif." },
            { title: "Unboxing", content: "Proses membuka kemasan produk dan merekamnya." },
            { title: "Username", content: "Identitas unik pengguna di platform digital." },
            { title: "Unboxing Video", content: "Video yang memperlihatkan proses membuka paket produk." },
            { title: "Up Selling", content: "Strategi menawarkan produk dengan versi lebih mahal." },
            { title: "Underconsumption Core", content: "Gaya hidup bijak dalam konsumsi, menolak pembelian berlebihan." }
        ]
    },
    {
        nama: "V",
        deskripsi: "V menekankan pentingnya konten visual dalam menarik perhatian audiens digital.",
        KamusContent: [
            { title: "Visual Storytelling", content: "Menyampaikan pesan atau cerita melalui elemen visual." },
            { title: "Visual Aesthetics", content: "Keindahan atau daya tarik visual dari suatu objek atau desain." },
            { title: "Videos View", content: "Jumlah penayangan sebuah video." },
            { title: "Viral", content: "Konten yang menyebar cepat di media sosial." },
            { title: "VT TikTok", content: "Konten video pendek di TikTok." },
            { title: "Video Marketing", content: "Pemasaran menggunakan konten video." },
            { title: "Virtual Influencer", content: "Karakter digital mirip manusia yang dibuat dengan grafis dan AI." },
            { title: "Vlog", content: "Video blog tentang kehidupan atau topik tertentu." }
        ]
    },
    {
        nama: "W",
        deskripsi: "Huruf W mencakup wawasan dan data insight yang digunakan untuk evaluasi kampanye.",
        KamusContent: [
            { title: "Whitelisting", content: "Izin brand untuk menayangkan iklan melalui akun influencer." },
            { title: "Warranties", content: "Jaminan atas kualitas produk atau layanan." },
            { title: "Woke-Washing", content: "Brand seolah peduli isu sosial hanya demi citra tanpa aksi nyata." },
            { title: "Word-Of-Mouth", content: "Promosi lewat rekomendasi personal antar individu." }
        ]
    },
    {
        nama: "X",
        deskripsi: "X mencerminkan faktor X dari KOL seperti keunikan dan gaya personal yang membedakan.",
        KamusContent: []
    },
    {
        nama: "Y",
        deskripsi: "Y membahas peran generasi muda (youth) dalam tren pemasaran digital.",
        KamusContent: [
            { title: "Yellow Cart", content: "Sistem yang digunakan dalam e-commerce untuk mempermudah proses pembelian." },
            { title: "YouTube Shorts", content: "Fitur video pendek dari YouTube." },
            { title: "YouTube Live", content: "Fitur siaran langsung dari YouTube." },
            { title: "YouTube Shopping", content: "Fitur belanja langsung dari video YouTube." }
        ]
    },
    {
        nama: "Z",
        deskripsi: "Huruf Z menekankan penyelesaian siklus kampanye dan zona audiens.",
        KamusContent: [
            { title: "Zero Click", content: "Hasil pencarian yang menjawab langsung tanpa perlu klik." },
            { title: "Zeitgeist", content: "Cerminan nilai dan budaya dari suatu era atau zaman." }
        ]
    }


]

export default function KamusSection() {
    const [searchQuery, setSearchQuery] = useState('')

    return (

        <section className="kamus-section">

            <div className="py-16 bg-white sm:py-20 -z-30">
                <div className="px-6 mx-auto max-w-2xl lg:max-w-7xl lg:px-8">
                    <AnimatedOnScroll delay={0}>
                        <div className="bg-teal-500 mb-5 m-auto py-5 sm:py-10 px-12 lg:px-12 rounded-xl">
                            <h2 className="font-semibold text-center text-black text-base/7">
                                Selamat Datang Di, <span className='text-white'>Kamus Kol</span>
                            </h2>
                            <p className="mx-auto mt-2 max-w-lg text-4xl font-semibold tracking-tight text-center text-black text-balance sm:text-5xl">
                                Cari tahu tentang dunia <span className='text-white'>KOL</span>
                            </p>

                            {/* Pembungkus input */}
                            <div className="mt-6 flex justify-center">
                                <input
                                    type="text"
                                    placeholder="Cari istilah atau definisi..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                                    className="w-full max-w-md border border-gray-300 px-5 py-3 rounded-full  text-sm shadow-md
             focus:outline-none focus:ring-2 focus:ring-white focus:border-white
             placeholder-black placeholder-opacity-100 transition-all duration-300"
                                />
                            </div>
                        </div>



                    </AnimatedOnScroll>

                    <div className="grid gap-4 mt-10 sm:mt-16 lg:grid-cols-3 lg:grid-rows-1 content-stretch items-stretch">
                        {KamusArray
                            .filter(item =>
                                item.KamusContent.some(sub =>
                                    sub.title.toLowerCase().includes(searchQuery) ||
                                    sub.content.toLowerCase().includes(searchQuery)
                                )
                            )
                            .map((item, index) => (
                                <div key={index} className="grid h-full gap-5 content-stretch items-stretch mb-10">
                                    <AnimatedOnScroll delay={0.3}>
                                        <div className="relative h-full flex flex-col">
                                            <div className="absolute inset-px bg-white rounded-lg"></div>
                                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] shadow-sm border border-gray-200">
                                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                                    <p className="text-lg font-semibold tracking-tight text-teal-600 max-lg:text-center">
                                                        {item.nama}
                                                    </p>
                                                    <p className="mt-2 text-gray-600 text-sm/6 max-lg:text-center">
                                                        {item.deskripsi}
                                                    </p>

                                                    <Accordion type="single" collapsible className="grid gap-3 py-8 text-lg leading-6 text-gray-800 md:gap-8">
                                                        <AccordionItem value="item-1">
                                                            <AccordionTrigger>Kamus {item.nama}</AccordionTrigger>
                                                            <AccordionContent>
                                                                <Accordion type="single" collapsible className="grid gap-3 text-base md:gap-4">
                                                                    {item.KamusContent
                                                                        .filter(sub =>
                                                                            sub.title.toLowerCase().includes(searchQuery) ||
                                                                            sub.content.toLowerCase().includes(searchQuery)
                                                                        )
                                                                        .map((subItem, subIndex) => (
                                                                            <AccordionItem key={subIndex} value={`item-${subIndex}`}>
                                                                                <AccordionTrigger>{subItem.title}</AccordionTrigger>
                                                                                <AccordionContent>{subItem.content}</AccordionContent>
                                                                            </AccordionItem>
                                                                        ))}
                                                                </Accordion>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    </Accordion>
                                                </div>
                                            </div>
                                        </div>
                                    </AnimatedOnScroll>
                                </div>
                            ))}

                        {searchQuery && KamusArray.every(item =>
                            !item.KamusContent.some(sub =>
                                sub.title.toLowerCase().includes(searchQuery) ||
                                sub.content.toLowerCase().includes(searchQuery)
                            )
                        ) && (
                                <p className="w-100 text-center text-gray-500">Tidak ditemukan istilah dengan kata kunci "<strong>{searchQuery}</strong>"</p>
                            )}

                    </div>
                </div>
            </div>
        </section>
    )

}