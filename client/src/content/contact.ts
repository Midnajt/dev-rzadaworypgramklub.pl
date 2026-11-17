export type Helpline = {
  id: string;
  region: string;
  phone: string;
  display: string;
};

export const nationalHelpline: Helpline = {
  id: "kraj",
  region: "Operator Krajowy — KZ LZS Warszawa",
  phone: "+48667099565",
  display: "667 099 565",
};

export const voivodeshipHelplines: Helpline[] = [
  { id: "ds", region: "dolnośląskie", phone: "+48605060348", display: "+48 605 060 348" },
  { id: "kp", region: "kujawsko-pomorskie", phone: "+48690515907", display: "+48 690 515 907" },
  { id: "lu", region: "lubelskie", phone: "+48695735077", display: "+48 695 735 077" },
  { id: "lb", region: "lubuskie", phone: "+48721639291", display: "+48 721 639 291" },
  { id: "ld", region: "łódzkie", phone: "+48605230423", display: "+48 605 230 423" },
  { id: "mp", region: "małopolskie", phone: "+48797874783", display: "+48 797 874 783" },
  { id: "mz", region: "mazowieckie", phone: "+48608056865", display: "+48 608 056 865" },
  { id: "op", region: "opolskie", phone: "+48694443002", display: "+48 694 443 002" },
  { id: "pd", region: "podlaskie", phone: "+48502408487", display: "+48 502 408 487" },
  { id: "pk", region: "podkarpackie", phone: "+48888636021", display: "+48 888 636 021" },
  { id: "pm", region: "pomorskie", phone: "+48797942900", display: "+48 797 942 900" },
  { id: "sl", region: "śląskie", phone: "+48513806932", display: "+48 513 806 932" },
  { id: "sk", region: "świętokrzyskie", phone: "+48881126515", display: "+48 881 126 515" },
  { id: "wp", region: "wielkopolskie", phone: "+48530598533", display: "+48 530 598 533" },
  { id: "wm", region: "warmińsko-mazurskie", phone: "+48691485927", display: "+48 691 485 927" },
  { id: "zp", region: "zachodniopomorskie", phone: "+48697994181", display: "+48 697 994 181" },
];
