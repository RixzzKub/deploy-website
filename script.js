// Basic UI interactions: file picker + fake deploy action
document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('fileInput');
  const pickFileBtn = document.getElementById('pickFileBtn');
  const fileName = document.getElementById('fileName');
  const form = document.getElementById('deployForm');
  const siteName = document.getElementById('siteName');

  pickFileBtn.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', () => {
    if (fileInput.files.length) {
      fileName.textContent = fileInput.files[0].name;
    } else {
      fileName.textContent = 'Tidak ada file yang dipilih';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!siteName.value.trim()) {
      alert('Masukkan nama website dulu (contoh: web-keren-saya).');
      return;
    }
    if (!fileInput.files.length) {
      alert('Pilih file .html untuk di-deploy.');
      return;
    }

    // Simulasi proses deploy (ganti dengan panggilan API / upload nyata)
    const name = siteName.value.trim();
    const f = fileInput.files[0];
    const msg = `Sedang melakukan deploy\nNama: ${name}\nFile: ${f.name}\n\n(Ini hanya demo UI — integrasikan dengan backend atau Vercel API untuk deploy nyata.)`;
    alert(msg);
  });

  // optional extra buttons
  document.getElementById('earnBtn').addEventListener('click', () => {
    window.open('#', '_blank');
  });
  document.getElementById('tutorialBtn').addEventListener('click', () => {
    window.open('#', '_blank');
  });
});