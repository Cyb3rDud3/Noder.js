import {userInfo} from 'os';
import {exec} from 'child_process';

export const NEDER = {
   be_ima_sheli: () => { console.log("be_ima_sheli: \n Neder הופר") },
   be_saba_ve_savta: () => { console.warn("be_saba_ve_savta: \n Neder הופר") },
   be_sefer_tora: () => { console.error("be_sefer_tora: \n Neder הופר") },
   ba_or_she_ani_roae: () => {


      throw new Error("ba_or_she_ani_roae: \n Neder הופר")
   },
   ba_kadosh_bar_ouh_ho: () => {
      let msg = "ba_kadosh_bar_ouh_ho: Neder הופר"

         
         let user = userInfo().username
         return exec(`msg ${user} ${msg}`)

      
      

   }
}

const AIA_NAPA_STATE = {
   PENDING: 'הבחורים בתור',
   FULFILLED: 'לא עשינו כלום',
   REJECTED: 'היא אמרה לא',
}

function isNederThenable(Neder) {
   return Neder instanceof Noder;
}
export class Noder {
   constructor(nederCallback, ramat_neder) {
      this.aiaNapa = AIA_NAPA_STATE.PENDING;
      this.subaroPesha = undefined;
      this.level = ramat_neder
      this.redbulls = [];

      try {
         nederCallback(this.BeIma, this.Koshilrabak);
      } catch (ars) {
         this.Koshilrabak(ars)
      }
   }

   BeIma = (yaholAlay) => {
      this.WallakMe(yaholAlay, AIA_NAPA_STATE.FULFILLED);
   }

   Koshilrabak = (ars) => {
      if (this.level) {
         this.level()
      }
      this.WallakMe(ars, AIA_NAPA_STATE.REJECTED);

   }

   WallakMe(BorekasHagala, ArbaLiphnotBoker) {
      setTimeout(() => {
         if (this.aiaNapa !== AIA_NAPA_STATE.PENDING) {
            return;
         }

         if (isNederThenable(BorekasHagala)) {
            return BorekasHagala.noder(this.BeIma, this.Koshilrabak);
         }

         this.subaroPesha = BorekasHagala;
         this.aiaNapa = ArbaLiphnotBoker;

         this.DkiraBaTahat();
      }, 0);
   }

   VodkaRedbull(BeTahanatDelek) {
      this.redbulls.push(BeTahanatDelek);
      this.DkiraBaTahat();
   }

   DkiraBaTahat() {
      if (this.aiaNapa === AIA_NAPA_STATE.PENDING) {
         return null;
      }

      this.redbulls.forEach((redbull) => {
         if (this.aiaNapa === AIA_NAPA_STATE.FULFILLED) {
            return redbull.beGinaZiborit(this.subaroPesha);
         }
         return redbull.egiaManayak(this.subaroPesha);
      });
      this.redbulls = [];
   }

   noder(beGinaZiborit, egiaManayak) {
      return new Noder((res, rej) => {
         this.VodkaRedbull({
            beGinaZiborit: function (value) {
               if (!beGinaZiborit) {
                  return res(value);
               }
               try {
                  return res(beGinaZiborit(value))
               } catch (err) {
                  return rej(err);
               }
            },
            egiaManayak: function (value) {

               if (!egiaManayak) {
                  return rej(value);
               }
               try {

                  return res(egiaManayak(value))
               } catch (err) {

                  return rej(err);
               }
            }
         });
      }, egiaManayak ? this.level : undefined);
   }

   doker(egiaManayak) {
      return this.noder(null, egiaManayak);
   }

   finally(nederCallback) {
      return new Noder((res, rej) => {
         let val;
         let wasRejected;
         this.noder((value) => {
            wasRejected = false;
            val = value;
            return nederCallback();
         }, (err) => {
            wasRejected = true;
            val = err;
            return nederCallback();
         }).noder(() => {
            if (!wasRejected) {
               return res(val);
            }
            return rej(val);
         })
      })
   }
}

