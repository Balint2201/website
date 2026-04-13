import Cursor from "@/components/cursor";
import Particles from "@/components/Particles";

type SetupItem = {
  label: string;
  name: string;
  href: string;
};

type SetupCardData = {
  title: string;
  accentClass: string;
  items: SetupItem[];
};

const setupCards: SetupCardData[] = [
  {
    title: "PC",
    accentClass: "bg-cyan-300/75",
    items: [
      { label: "CPU", name: "Intel® Core™ i7-10700K", href: "https://www.intel.com/content/www/us/en/products/sku/199335/intel-core-i710700k-processor-16m-cache-up-to-5-10-ghz/specifications.html" },
      { label: "Motherboard", name: "ASUS PRIME H510M-K R2.0", href: "https://www.asus.com/motherboards-components/motherboards/prime/prime-h510m-k-r2-0/" },
      { label: "CPU Cooler", name: "Thermalright Phantom Spirit 120 SE ARGB", href: "https://www.thermalright.com/product/phantom-spirit-120-se-argb/" },
      { label: "RAM", name: "G.Skill Aegis DIMM 2x16GB 3000MHz DDR4", href: "https://www.gskill.com/product/165/185/1536026953/F4-3000C16D-32GISB" },
      { label: "GPU", name: "Gigabyte GeForce RTX 3060 GAMING OC 12G LHR (Rev. 2.0)", href: "https://www.gigabyte.com/Graphics-Card/GV-N3060GAMING-OC-12GD-rev-20" },
      { label: "Storage", name: "1TB WD Black SN770 M.2 SSD", href: "https://www.wdc.com/en-us/products/internal-storage/wd-black-sn770-nvme-ssd" },
      { label: "Power Supply", name: "Chieftec A-90 series 650W", href: "https://www.chieftec.eu/products-detail/109/A-90-SERIES/111/GDP-650C" },
      { label: "Case", name: "ASUS Case A21", href: "https://www.asus.com/hu/motherboards-components/cases/asus/asus-a21-case/" },
      { label: "OS", name: "Windows 11 Pro", href: "https://www.microsoft.com/en-us/windows" },
    ],
  },
  {
    title: "Mobile",
    accentClass: "bg-emerald-300/75",
    items: [
      { label: "Phone", name: "Samsung Galaxy S23 Ultra 512/12", href: "https://www.samsung.com/us/smartphones/galaxy-s23-ultra-lite-no-3-party/" },
      { label: "Charger Adapter", name: "Samsung 45W PD2 Power Adapter", href: "https://www.samsung.com/us/mobile-accessories/45w-pd-power-adapter-with-5a-usb-c-cable-black-sku-ep-t4511xbegus/" },
      { label: "Earbuds", name: "Samsung Galaxy Buds3 Pro", href: "https://www.samsung.com/us/mobile-audio/galaxy-buds3-pro/" },
      { label: "Smartwatch", name: "Xiaomi Smart Band 9 Pro", href: "https://www.mi.com/global/product/xiaomi-smart-band-9-pro/" },
    ],
  },
  {
    title: "Peripherals",
    accentClass: "bg-yellow-200/80",
    items: [
      { label: "Keyboard", name: "Logitech G213 PRODIGY", href: "https://www.logitechg.com/en-us/shop/p/g213-rgb-gaming-keyboard" },
      { label: "Mouse", name: "Logitech G203", href: "https://www.logitechg.com/en-us/shop/p/g203-lightsync-rgb-gaming-mouse.910-005790" },
      { label: "Headset", name: "AKG K361", href: "https://www.akg.com/headphones/professional-headphones/K361-.html" },
      { label: "Microphone", name: "Sandberg Streamer USB Microphone RGB (126-39)", href: "https://sandberg.hu/en/product/streamer-usb-microphone-rgb" },
      { label: "Monitor", name: "23.8\" Spirit of Gamer EPIC LCD monitor", href: "https://spiritofgamer.com/gb/ecrans/437-epic-238-3700104434141.html" },
    ],
  },
];

type SetupCardProps = {
  card: SetupCardData;
};

const SetupCard = ({ card }: SetupCardProps) => {
  return (
    <section className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm shadow-[0_12px_28px_rgba(0,0,0,0.3)]">
      <h2 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">{card.title}</h2>

      <ul className="space-y-1.5">
        {card.items.map((item) => (
          <li key={`${card.title}-${item.label}`} className="group grid grid-cols-[0.75rem_minmax(0,1fr)] gap-3 text-base leading-snug sm:text-lg">
            <span
              className={`w-1.5 rounded-[2px] self-stretch justify-self-start ${card.accentClass} transition-all duration-250 ease-out group-hover:w-3 group-hover:bg-white`}
              aria-hidden="true"
            />

            <div className="min-w-0 pr-1 text-white/90 transition-transform duration-250 ease-out group-hover:translate-x-[4px]">
              <span className="font-bold text-white">{item.label}: </span>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="cursor-target font-bold underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {item.name}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

function SetupPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#1a1a1a]">
      <div className="root_cursorContainer">
        <Cursor />
      </div>

      <div className="w-full h-full absolute inset-0 z-[1] opacity-[0.3] pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={360}
          particleSpread={9}
          speed={0.14}
          particleBaseSize={95}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <main className="relative z-[2] mx-auto flex w-full max-w-[1600px] flex-col px-4 pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-3">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Setup</h1>
          <a
            href="/"
            aria-label="Back to home"
            title="Back to home"
            className="cursor-target p-1 text-white/80 transition-colors hover:text-white"
          >
            <svg
              viewBox="0 0 512 512"
              className="h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <polygon points="434.162,293.382 434.162,493.862 308.321,493.862 308.321,368.583 203.682,368.583 203.682,493.862 77.841,493.862 77.841,293.382 256.002,153.862" />
              <polygon points="0,242.682 256,38.93 512,242.682 482.21,285.764 256,105.722 29.79,285.764" />
              <polygon points="439.853,18.138 439.853,148.538 376.573,98.138 376.573,18.138" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {setupCards.map((card) => (
            <SetupCard key={card.title} card={card} />
          ))}
        </div>

        <footer className="mt-8 text-center text-sm text-neutral-300">
          <p>
            This website is open source! Check it out{" "}
            <a
              href="https://github.com/Balint2201/website"
              target="_blank"
              rel="noreferrer"
              className="cursor-target font-bold hover:text-white transition-colors"
            >
              here
            </a>
            !
          </p>
          <p className="mt-1 text-xs italic text-neutral-400">
            Based on{" "}
            <a
              href="https://spikerko.org/"
              target="_blank"
              rel="noreferrer"
              className="cursor-target font-bold hover:text-white transition-colors"
            >
              @spikerko
            </a>
            's code.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default SetupPage;