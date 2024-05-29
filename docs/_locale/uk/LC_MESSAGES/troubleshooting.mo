��    G      T  a   �             �   -  u   �     N  
   g     r     �     �  X   �  �     L   �  ~   	     �	  B   �	  �   �	  a   �
  m     j   u     �     �       0      F   Q     �  
   �     �     �  �   �  E   j     �  \   �  E     V   d  c   �  �     �   �  J   x  3   �  %   �       O   0     �     �  1   �  F   �  E   &  .  l  �   �  O     T   l  D   �  �     %   �  9   �  �   �  U   }  w   �     K     a  "   o     �    �  �   �  '   D  U   l     �  6   �          )  `   E  '  �  4   �  '    �   +  .     #   C  !   g  >   �     �  �   �  ^  d  �   �   �   E!  *   "  }   /"  O  �"  �   �#  �   �$  �   n%  U   "&  1   x&  !   �&  :   �&  �   '  %   �'     �'  #   �'     �'  �   (  �   �(  /   w)  �   �)  �   B*  �   �*  �   o+  W  ,  H  v-  �   �.  D   `/  .   �/  *   �/  i   �/  2   i0     �0  ?   �0  k   �0  {   h1  E  �1  �   *4  �   �4  �   |5  k   6  �   �6  8   Y7  i   �7  �   �7  �   �8  �   y9  *   T:     :  G   �:  !   �:  �  ;    �<  I    >  �   J>  "   �>  �   �>  A   t?  1   �?  �   �?        =       E   	                #   @   
          +   $       1   <          6               &       )   %          !       3   F   8       5       '   -   9   .   ?          2                             4   0                  C   ,   A          D   >            ;   /                            (   *         :   7                    B      G   "        Advanced Connectivity Tests And **a more generic way to fix it** is just deleting every MAC address at the configuration file of the cloned machine. They will be correctly regenerated automatically. Another example could be when cloning VyOS VMs in GNS3 and you get into the same issue: interface names have changed. Basic Connectivity Tests Boot Steps Connectivity Tests Discover routers via eth0. Example: Finally it runs the post-config script ``/config/scripts/vyos-postconfig-bootup.script`` For example, you have a VyOS VM with 4 Ethernet interfaces named eth0, eth1, eth2 and eth3. Then, you migrate your VyOS VM to a different host and find your interfaces now are eth4, eth5, eth6 and eth7. Grub then starts the Linux boot and loads the Linux Kernel ``/boot/vmlinuz`` However, another helper is available which combines ping and traceroute into a single tool. An example of its output is shown: IPv6 Topology Discovery IPv6 uses different techniques to discover its Neighbors/topology. If it is a VM, go into the settings of the host and set the MAC address to the settings found in the config.boot file. You can also set the MAC to static if the host allows so. If the config file was upgraded, runs any post upgrade scripts ``/config/scripts/post-upgrade.d`` If you find the names of your interfaces have changed, this could be because your MAC addresses have changed. Initialises the boot configuration file - copies over ``config.boot.default`` if there is no configuration Interface Bandwidth Usage Interface Performance Interface names Kernel Launches Systemd ``/lib/systemd/systemd`` Log into VyOS and run this command to display your interface settings. Monitor command Monitoring Mounts the ``/boot`` partition Neighbor Discovery Now, in order to update a MAC address in the configuration, run this command specifying the interface name and MAC address you want. One way to fix this issue **taking control of the MAC addresses** is: Router Discovery Runs The pre-config script, if there is one ``/config/scripts/vyos-preconfig-bootup.script`` Runs ``telinit q`` to tell the init system to reload ``/etc/inittab`` Runs the configuration migration, if the configuration is for an older version of VyOS Send ICMP echo requests to destination host. There are multiple options to ping, inkl. VRF support. Several options are available for changing the display output. Press `h` to invoke the built in help system. To quit, just press `q` and you'll be returned to the VyOS command prompt. Sometimes things break or don't work as expected. This section describes several troubleshooting tools provided by VyOS that can help when something goes wrong. Sometimes you need to clear counters or statistics to troubleshoot better. Starts FRR_ - successor to `GNU Zebra`_ and Quagga_ Starts ``rl-system`` and ``firewall`` System Information Systemd loads the VyOS service file ``/lib/systemd/system/vyos-router.service`` Take note of MAC addresses. Terminal/Console The BIOS loads Grub (or isolinux for the Live CD) The ``accept`` command opens a listening iperf server on TCP Port 5001 The ``initiate`` command connects to that server to perform the test. The ``monitor command`` command allows you to repeatedly run a command to view a continuously refreshed output. The command is run and output every 2 seconds, allowing you to monitor the output continuously without having to re-run the command. This can be useful to follow routing adjacency formation. The boot configuration file is then applied by ``/opt/vyatta/sbin/ vyatta-boot-config-loader/opt/vyatta/etc/config/config.boot`` The command follow the same logic as the ``set`` command in configuration mode. The config loader script writes log entries to ``/var/log/vyatta-config-loader.log`` The output consumes the screen and will replace your command prompt. The service file launches the VyOS router init script ``/usr/libexec/vyos/init/vyos-router`` - this is part of the vyatta-cfg_ Debian package These are the boot steps for VyOS 1.2 To do this use the ``clear`` command in Operational mode. To monitor interface traffic, issue the :code:`monitor traffic interface <name>` command, replacing `<name>` with your chosen interface. To quit monitoring, press `Ctrl-c` and you'll be returned to the VyOS command prompt. To take a look on the network bandwidth between two nodes, the ``monitor bandwidth-test`` command is used to run iperf. Trace path to target. Traffic Dumps Traffic can be filtered and saved. Troubleshooting Verifying connectivity can be done with the familiar `ping` and `traceroute` commands. The options for each are shown (the options for each command were displayed using the built-in help as described in the :ref:`cli` section and are omitted from the output here): VyOS 1.2 uses `Debian Jessie`_ as the base Linux operating system. Jessie was the first version of Debian that uses systemd_ as the default init system. VyOS features several monitoring tools. Will clear the screen and show you the output of ``show interfaces`` every 2 seconds. show the following: to clear counters on firewall rulesets or single rules to clear interface counters to clear the console output to take a quick view on the used bandwidth of an interface use the ``monitor bandwidth`` command MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
X-Generator: Localazy (https://localazy.com)
Project-Id-Version: 
Language: uk
Plural-Forms: nplurals=3; plural=((n%10==1) && (n%100!=11)) ? 0 : ((n%10>=2 && n%10<=4) && ((n%100<12 || n%100>14))) ? 1 : 2;
 Розширені тести підключення І **більш загальний спосіб це виправити** — просто видалити кожну MAC-адресу у файлі конфігурації клонованої машини. Вони будуть правильно відновлені автоматично. Іншим прикладом може бути клонування віртуальних машин VyOS у GNS3, і ви потрапите в ту саму проблему: назви інтерфейсів змінилися. Базові тести підключення Етапи завантаження Тести підключення Знайдіть маршрутизатори через eth0. приклад: Нарешті, він запускає сценарій постконфігурації ``/config/scripts/vyos-postconfig-bootup.script`` Наприклад, у вас є віртуальна машина VyOS із 4 інтерфейсами Ethernet під назвами eth0, eth1, eth2 і eth3. Потім ви переносите віртуальну машину VyOS на інший хост і бачите, що ваші інтерфейси тепер eth4, eth5, eth6 і eth7. Після цього Grub починає завантаження Linux і завантажує ядро Linux ``/boot/vmlinuz`` Однак доступний інший помічник, який поєднує ping і traceroute в один інструмент. Показано приклад його виходу: Виявлення топології IPv6 IPv6 використовує різні методи для виявлення своїх сусідів/топології. Якщо це віртуальна машина, перейдіть до налаштувань хоста та встановіть для MAC-адреси параметри, знайдені у файлі config.boot. Ви також можете встановити статичний MAC, якщо це дозволяє хост. Якщо файл конфігурації було оновлено, запускає будь-які сценарії після оновлення ``/config/scripts/post-upgrade.d`` Якщо ви виявите, що назви ваших інтерфейсів змінилися, це може бути тому, що ваші MAC-адреси змінилися. Ініціалізує файл конфігурації завантаження - копіює поверх ``config.boot.default``, якщо конфігурації немає Використання пропускної здатності інтерфейсу Продуктивність інтерфейсу Назви інтерфейсів Ядро запускає Systemd ``/lib/systemd/systemd`` Увійдіть у VyOS і запустіть цю команду, щоб відобразити налаштування інтерфейсу. Команда моніторингу Моніторинг Монтує розділ ``/boot`` Відкриття сусіда Тепер, щоб оновити MAC-адресу в конфігурації, виконайте цю команду, вказавши ім’я інтерфейсу та MAC-адресу, які ви хочете. Один зі способів вирішення цієї проблеми **взявши під контроль MAC-адреси**: Виявлення маршрутизатора Запускає сценарій попередньої конфігурації, якщо є такий ``/config/scripts/vyos-preconfig-bootup.script`` Запускає ``telinit q``, щоб сказати системі ініціалізації перезавантажити ``/etc/inittab`` Запускає міграцію конфігурації, якщо конфігурація призначена для старішої версії VyOS Надсилайте ехо-запити ICMP на цільовий хост. Є кілька варіантів пінгування, зокрема. Підтримка VRF. Доступно кілька варіантів зміни вихідного сигналу дисплея. Натисніть `h`, щоб викликати вбудовану довідкову систему. Щоб вийти, просто натисніть `q`, і ви повернетеся до командного рядка VyOS. Іноді щось ламається або працює не так, як очікувалося. У цьому розділі описано кілька інструментів усунення несправностей, наданих VyOS, які можуть допомогти, коли щось піде не так. Іноді вам потрібно очистити лічильники або статистику, щоб краще усунути несправності. Запускає FRR_ - наступника `GNU Zebra`_ і Quagga_ Запускає ``rl-system`` і ``firewall`` Інформація про систему Systemd завантажує службовий файл VyOS ``/lib/systemd/system/vyos-router.service`` Зверніть увагу на MAC-адреси. Термінал/Консоль BIOS завантажує Grub (або isolinux для Live CD) Команда ``accept`` відкриває слухаючий сервер iperf на порту TCP 5001 Команда ``initiate`` підключається до цього сервера для виконання тесту. Команда ``monitor command`` дозволяє вам багаторазово запускати команду для перегляду безперервно оновленого виводу. Команда виконується та виводиться кожні 2 секунди, що дозволяє постійно контролювати вихідні дані без повторного запуску команди. Це може бути корисним для відстеження формування суміжності маршрутизації. Потім файл конфігурації завантаження застосовано за допомогою ``/opt/vyatta/sbin/ vyatta-boot-config-loader/opt/vyatta/etc/config/config.boot`` Команда дотримується тієї ж логіки, що й команда ``set`` у режимі налаштування. Сценарій завантажувача конфігурації записує записи журналу в ``/var/log/vyatta-config-loader.log`` Результат займає весь екран і замінює ваш командний рядок. Сервісний файл запускає сценарій ініціалізації маршрутизатора VyOS ``/usr/libexec/vyos/init/vyos-router`` - це частина пакета vyatta-cfg_ Debian Це кроки завантаження для VyOS 1.2 Для цього використовуйте команду ``clear`` в робочому режимі. Щоб контролювати трафік інтерфейсу, запустіть інтерфейс трафіку :code:`monitor<name> ` команда, що замінює `<name> ` з вибраним інтерфейсом. Щоб вийти з моніторингу, натисніть `Ctrl-c`, і ви повернетеся до командного рядка VyOS. Щоб переглянути пропускну здатність мережі між двома вузлами, для запуску iperf використовується команда ``monitor bandwidth-test``. Простежте шлях до мети. Дампи трафіку Трафік можна фільтрувати та зберігати. Вирішення проблем Перевірити підключення можна за допомогою знайомих команд `ping` і `traceroute`. Відображаються параметри для кожної команди (параметри для кожної команди відображаються за допомогою вбудованої довідки, як описано в розділі :ref:`cli`, і тут не наводяться у вихідних даних): VyOS 1.2 використовує `Debian Jessie`_ як базову операційну систему Linux. Jessie була першою версією Debian, яка використовує systemd_ як систему ініціалізації за замовчуванням. VyOS має кілька інструментів моніторингу. Очищає екран і кожні 2 секунди показує результат ``показати інтерфейси``. показати наступне: щоб очистити лічильники наборів правил брандмауера або окремих правил щоб очистити лічильники інтерфейсу щоб очистити вихід консолі щоб швидко переглянути використану пропускну здатність інтерфейсу, скористайтеся командою ``monitor bandwidth`` 