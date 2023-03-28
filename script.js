console.log("Test");

const getQuran = async () => {
  const res = await fetch("http://api.alquran.cloud/v1/quran/en.asad");
  const response = await res.json();
  const names = response.data.surahs.map((surah) => surah.englishName);

  console.log(names);
};

async function getAyatByNumber(number1) {
  const res2 = await fetch(
    `https://api.alquran.cloud/v1/ayah/${number1}/en.asad`
  );
  const response2 = await res2.json();
  return [
    response2.data.text,
    response2.data.surah.englishName,
    response2.data.numberInSurah,
  ];
}
getAyatByNumber(256);

// const araytKursi = await getAyatByNumber(256);

// console.log(araytKursi);
const quranel = document.querySelector(".quran");
const suratel = document.getElementById("sourat");
const fetchel = document.getElementById("fetchel");
fetchel.addEventListener("click", async function () {
  const randomenmbr = Math.floor(Math.random() * 6236 + 1);
  quranel.textContent = "loading...";
  const [ayah, name, nmr] = await getAyatByNumber(randomenmbr);
  quranel.textContent = ayah;
  suratel.textContent = `${name} - ${nmr}`;
});
