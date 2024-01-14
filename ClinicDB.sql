PGDMP  +    
                 |            ClinicDB    15.1    16.0 `    #           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            $           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            %           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            &           1262    16398    ClinicDB    DATABASE     ~   CREATE DATABASE "ClinicDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "ClinicDB";
                postgres    false            �            1259    16436    Appointment    TABLE     �   CREATE TABLE public."Appointment" (
    "ID" integer NOT NULL,
    "Patient_Id" integer NOT NULL,
    "Service_Id" integer NOT NULL,
    "Date" timestamp without time zone NOT NULL,
    "Doctor_Id" integer NOT NULL
);
 !   DROP TABLE public."Appointment";
       public         heap    postgres    false            �            1259    19574    Appointments    TABLE     �   CREATE TABLE public."Appointments" (
    "Id" integer NOT NULL,
    "Date" timestamp with time zone NOT NULL,
    "DoctorId" integer,
    "PatientId" integer,
    "ServiceId" integer
);
 "   DROP TABLE public."Appointments";
       public         heap    postgres    false            �            1259    19573    Appointments_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Appointments_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."Appointments_Id_seq";
       public          postgres    false    231            '           0    0    Appointments_Id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."Appointments_Id_seq" OWNED BY public."Appointments"."Id";
          public          postgres    false    230            �            1259    16430 
   Department    TABLE     �   CREATE TABLE public."Department" (
    "ID" integer NOT NULL,
    "Name" character varying(50) NOT NULL,
    "Specialization" character varying(50)
);
     DROP TABLE public."Department";
       public         heap    postgres    false            �            1259    19517    Departments    TABLE     �   CREATE TABLE public."Departments" (
    "Id" integer NOT NULL,
    "Name" character varying(50) NOT NULL,
    "Specialization" character varying(50)
);
 !   DROP TABLE public."Departments";
       public         heap    postgres    false            �            1259    19516    Departments_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Departments_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."Departments_Id_seq";
       public          postgres    false    221            (           0    0    Departments_Id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."Departments_Id_seq" OWNED BY public."Departments"."Id";
          public          postgres    false    220            �            1259    16442    Doctor    TABLE     �   CREATE TABLE public."Doctor" (
    "ID" integer NOT NULL,
    "Name" character varying(50) NOT NULL,
    "Specialization" character varying(50),
    "WorkExp" integer,
    "Department_Id" integer NOT NULL
);
    DROP TABLE public."Doctor";
       public         heap    postgres    false            �            1259    16427    DoctorSchedule    TABLE     �   CREATE TABLE public."DoctorSchedule" (
    "ID" integer NOT NULL,
    "Doctors_Id" integer NOT NULL,
    "Day_of_week" character varying(50) NOT NULL,
    "Start" time without time zone,
    "End" time without time zone
);
 $   DROP TABLE public."DoctorSchedule";
       public         heap    postgres    false            �            1259    19618    DoctorSchedules    TABLE     �   CREATE TABLE public."DoctorSchedules" (
    "Id" integer NOT NULL,
    "Day_of_week" character varying(50) NOT NULL,
    "Start" time without time zone,
    "End" time without time zone,
    "DoctorId" integer
);
 %   DROP TABLE public."DoctorSchedules";
       public         heap    postgres    false            �            1259    19617    DoctorSchedules_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."DoctorSchedules_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."DoctorSchedules_Id_seq";
       public          postgres    false    235            )           0    0    DoctorSchedules_Id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."DoctorSchedules_Id_seq" OWNED BY public."DoctorSchedules"."Id";
          public          postgres    false    234            �            1259    19524    Doctors    TABLE     �   CREATE TABLE public."Doctors" (
    "Id" integer NOT NULL,
    "Name" character varying(50) NOT NULL,
    "Specialization" character varying(50),
    "WorkExp" integer,
    "DepartmentId" integer
);
    DROP TABLE public."Doctors";
       public         heap    postgres    false            �            1259    19523    Doctors_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Doctors_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Doctors_Id_seq";
       public          postgres    false    223            *           0    0    Doctors_Id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Doctors_Id_seq" OWNED BY public."Doctors"."Id";
          public          postgres    false    222            �            1259    16422    MedicalResult    TABLE     "  CREATE TABLE public."MedicalResult" (
    "ID" integer NOT NULL,
    "Diagnose" character varying(50) NOT NULL,
    "Conclusion" character varying(50),
    "Date" date,
    "Doctor_Id" integer NOT NULL,
    "Patietn_Id" integer NOT NULL,
    "Appoitment_Id" integer,
    "Picture" bytea
);
 #   DROP TABLE public."MedicalResult";
       public         heap    postgres    false            �            1259    19596    MedicalResults    TABLE       CREATE TABLE public."MedicalResults" (
    "Id" integer NOT NULL,
    "Diagnose" character varying(50) NOT NULL,
    "Conclusion" character varying(50),
    "Date" timestamp with time zone,
    "AppointmentId" integer,
    "DoctorId" integer,
    "PatientId" integer
);
 $   DROP TABLE public."MedicalResults";
       public         heap    postgres    false            �            1259    19595    MedicalResults_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."MedicalResults_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."MedicalResults_Id_seq";
       public          postgres    false    233            +           0    0    MedicalResults_Id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."MedicalResults_Id_seq" OWNED BY public."MedicalResults"."Id";
          public          postgres    false    232            �            1259    19536    Patients    TABLE     �   CREATE TABLE public."Patients" (
    "Id" integer NOT NULL,
    "Name" character varying(50) NOT NULL,
    "BirthDate" timestamp with time zone,
    "Gender" character varying(50),
    "Number" character varying(15),
    "Adress" character varying(50)
);
    DROP TABLE public."Patients";
       public         heap    postgres    false            �            1259    19535    Patients_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Patients_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Patients_Id_seq";
       public          postgres    false    225            ,           0    0    Patients_Id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Patients_Id_seq" OWNED BY public."Patients"."Id";
          public          postgres    false    224            �            1259    16433    Service    TABLE     �   CREATE TABLE public."Service" (
    "ID" integer NOT NULL,
    "Name" character varying(50) NOT NULL,
    "Cost" money,
    "Specialization" character varying(50),
    "Department_Id" integer NOT NULL
);
    DROP TABLE public."Service";
       public         heap    postgres    false            �            1259    19560    Services    TABLE     �   CREATE TABLE public."Services" (
    "Id" integer NOT NULL,
    "Name" character varying(200) NOT NULL,
    "Cost" numeric,
    "Specialization" character varying(50),
    "DepartmentId" integer
);
    DROP TABLE public."Services";
       public         heap    postgres    false            �            1259    19559    Services_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Services_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Services_Id_seq";
       public          postgres    false    229            -           0    0    Services_Id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Services_Id_seq" OWNED BY public."Services"."Id";
          public          postgres    false    228            �            1259    19543    Users    TABLE     �   CREATE TABLE public."Users" (
    "Id" integer NOT NULL,
    email character varying(50) NOT NULL,
    password character varying(255) NOT NULL,
    "IsEmployee" boolean NOT NULL,
    "DoctorId" integer,
    "PatientId" integer
);
    DROP TABLE public."Users";
       public         heap    postgres    false            �            1259    19542    Users_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Users_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Users_Id_seq";
       public          postgres    false    227            .           0    0    Users_Id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Users_Id_seq" OWNED BY public."Users"."Id";
          public          postgres    false    226            L           2604    19577    Appointments Id    DEFAULT     x   ALTER TABLE ONLY public."Appointments" ALTER COLUMN "Id" SET DEFAULT nextval('public."Appointments_Id_seq"'::regclass);
 B   ALTER TABLE public."Appointments" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    230    231    231            G           2604    19520    Departments Id    DEFAULT     v   ALTER TABLE ONLY public."Departments" ALTER COLUMN "Id" SET DEFAULT nextval('public."Departments_Id_seq"'::regclass);
 A   ALTER TABLE public."Departments" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    220    221    221            N           2604    19621    DoctorSchedules Id    DEFAULT     ~   ALTER TABLE ONLY public."DoctorSchedules" ALTER COLUMN "Id" SET DEFAULT nextval('public."DoctorSchedules_Id_seq"'::regclass);
 E   ALTER TABLE public."DoctorSchedules" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    234    235    235            H           2604    19527 
   Doctors Id    DEFAULT     n   ALTER TABLE ONLY public."Doctors" ALTER COLUMN "Id" SET DEFAULT nextval('public."Doctors_Id_seq"'::regclass);
 =   ALTER TABLE public."Doctors" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    222    223    223            M           2604    19599    MedicalResults Id    DEFAULT     |   ALTER TABLE ONLY public."MedicalResults" ALTER COLUMN "Id" SET DEFAULT nextval('public."MedicalResults_Id_seq"'::regclass);
 D   ALTER TABLE public."MedicalResults" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    233    232    233            I           2604    19539    Patients Id    DEFAULT     p   ALTER TABLE ONLY public."Patients" ALTER COLUMN "Id" SET DEFAULT nextval('public."Patients_Id_seq"'::regclass);
 >   ALTER TABLE public."Patients" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    224    225    225            K           2604    19563    Services Id    DEFAULT     p   ALTER TABLE ONLY public."Services" ALTER COLUMN "Id" SET DEFAULT nextval('public."Services_Id_seq"'::regclass);
 >   ALTER TABLE public."Services" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    229    228    229            J           2604    19546    Users Id    DEFAULT     j   ALTER TABLE ONLY public."Users" ALTER COLUMN "Id" SET DEFAULT nextval('public."Users_Id_seq"'::regclass);
 ;   ALTER TABLE public."Users" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    226    227    227                      0    16436    Appointment 
   TABLE DATA           ^   COPY public."Appointment" ("ID", "Patient_Id", "Service_Id", "Date", "Doctor_Id") FROM stdin;
    public          postgres    false    218   y                 0    19574    Appointments 
   TABLE DATA           \   COPY public."Appointments" ("Id", "Date", "DoctorId", "PatientId", "ServiceId") FROM stdin;
    public          postgres    false    231   y                 0    16430 
   Department 
   TABLE DATA           F   COPY public."Department" ("ID", "Name", "Specialization") FROM stdin;
    public          postgres    false    216   xy                 0    19517    Departments 
   TABLE DATA           G   COPY public."Departments" ("Id", "Name", "Specialization") FROM stdin;
    public          postgres    false    221   �y                 0    16442    Doctor 
   TABLE DATA           ^   COPY public."Doctor" ("ID", "Name", "Specialization", "WorkExp", "Department_Id") FROM stdin;
    public          postgres    false    219   nz                 0    16427    DoctorSchedule 
   TABLE DATA           ]   COPY public."DoctorSchedule" ("ID", "Doctors_Id", "Day_of_week", "Start", "End") FROM stdin;
    public          postgres    false    215   �z                  0    19618    DoctorSchedules 
   TABLE DATA           \   COPY public."DoctorSchedules" ("Id", "Day_of_week", "Start", "End", "DoctorId") FROM stdin;
    public          postgres    false    235   �z                 0    19524    Doctors 
   TABLE DATA           ^   COPY public."Doctors" ("Id", "Name", "Specialization", "WorkExp", "DepartmentId") FROM stdin;
    public          postgres    false    223   {{                 0    16422    MedicalResult 
   TABLE DATA           �   COPY public."MedicalResult" ("ID", "Diagnose", "Conclusion", "Date", "Doctor_Id", "Patietn_Id", "Appoitment_Id", "Picture") FROM stdin;
    public          postgres    false    214   |                 0    19596    MedicalResults 
   TABLE DATA           |   COPY public."MedicalResults" ("Id", "Diagnose", "Conclusion", "Date", "AppointmentId", "DoctorId", "PatientId") FROM stdin;
    public          postgres    false    233   *|                 0    19536    Patients 
   TABLE DATA           ]   COPY public."Patients" ("Id", "Name", "BirthDate", "Gender", "Number", "Adress") FROM stdin;
    public          postgres    false    225   �|                 0    16433    Service 
   TABLE DATA           \   COPY public."Service" ("ID", "Name", "Cost", "Specialization", "Department_Id") FROM stdin;
    public          postgres    false    217   .~                 0    19560    Services 
   TABLE DATA           \   COPY public."Services" ("Id", "Name", "Cost", "Specialization", "DepartmentId") FROM stdin;
    public          postgres    false    229   K~                 0    19543    Users 
   TABLE DATA           _   COPY public."Users" ("Id", email, password, "IsEmployee", "DoctorId", "PatientId") FROM stdin;
    public          postgres    false    227   �       /           0    0    Appointments_Id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."Appointments_Id_seq"', 3, true);
          public          postgres    false    230            0           0    0    Departments_Id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."Departments_Id_seq"', 1, false);
          public          postgres    false    220            1           0    0    DoctorSchedules_Id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."DoctorSchedules_Id_seq"', 15, true);
          public          postgres    false    234            2           0    0    Doctors_Id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Doctors_Id_seq"', 7, true);
          public          postgres    false    222            3           0    0    MedicalResults_Id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."MedicalResults_Id_seq"', 6, true);
          public          postgres    false    232            4           0    0    Patients_Id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Patients_Id_seq"', 8, true);
          public          postgres    false    224            5           0    0    Services_Id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Services_Id_seq"', 43, true);
          public          postgres    false    228            6           0    0    Users_Id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Users_Id_seq"', 10, true);
          public          postgres    false    226            f           2606    19579    Appointments Appointments_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."Appointments"
    ADD CONSTRAINT "Appointments_pkey" PRIMARY KEY ("Id");
 L   ALTER TABLE ONLY public."Appointments" DROP CONSTRAINT "Appointments_pkey";
       public            postgres    false    231            \           2606    19522    Departments Departments_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."Departments"
    ADD CONSTRAINT "Departments_pkey" PRIMARY KEY ("Id");
 J   ALTER TABLE ONLY public."Departments" DROP CONSTRAINT "Departments_pkey";
       public            postgres    false    221            j           2606    19623 $   DoctorSchedules DoctorSchedules_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."DoctorSchedules"
    ADD CONSTRAINT "DoctorSchedules_pkey" PRIMARY KEY ("Id");
 R   ALTER TABLE ONLY public."DoctorSchedules" DROP CONSTRAINT "DoctorSchedules_pkey";
       public            postgres    false    235            ^           2606    19529    Doctors Doctors_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Doctors"
    ADD CONSTRAINT "Doctors_pkey" PRIMARY KEY ("Id");
 B   ALTER TABLE ONLY public."Doctors" DROP CONSTRAINT "Doctors_pkey";
       public            postgres    false    223            h           2606    19601 "   MedicalResults MedicalResults_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."MedicalResults"
    ADD CONSTRAINT "MedicalResults_pkey" PRIMARY KEY ("Id");
 P   ALTER TABLE ONLY public."MedicalResults" DROP CONSTRAINT "MedicalResults_pkey";
       public            postgres    false    233            X           2606    16456    Appointment PK_Appointment 
   CONSTRAINT     ^   ALTER TABLE ONLY public."Appointment"
    ADD CONSTRAINT "PK_Appointment" PRIMARY KEY ("ID");
 H   ALTER TABLE ONLY public."Appointment" DROP CONSTRAINT "PK_Appointment";
       public            postgres    false    218            T           2606    16452    Department PK_Department 
   CONSTRAINT     \   ALTER TABLE ONLY public."Department"
    ADD CONSTRAINT "PK_Department" PRIMARY KEY ("ID");
 F   ALTER TABLE ONLY public."Department" DROP CONSTRAINT "PK_Department";
       public            postgres    false    216            Z           2606    16460    Doctor PK_Doctor 
   CONSTRAINT     T   ALTER TABLE ONLY public."Doctor"
    ADD CONSTRAINT "PK_Doctor" PRIMARY KEY ("ID");
 >   ALTER TABLE ONLY public."Doctor" DROP CONSTRAINT "PK_Doctor";
       public            postgres    false    219            R           2606    16450     DoctorSchedule PK_DoctorSchedule 
   CONSTRAINT     d   ALTER TABLE ONLY public."DoctorSchedule"
    ADD CONSTRAINT "PK_DoctorSchedule" PRIMARY KEY ("ID");
 N   ALTER TABLE ONLY public."DoctorSchedule" DROP CONSTRAINT "PK_DoctorSchedule";
       public            postgres    false    215            P           2606    16448    MedicalResult PK_MedicalResult 
   CONSTRAINT     b   ALTER TABLE ONLY public."MedicalResult"
    ADD CONSTRAINT "PK_MedicalResult" PRIMARY KEY ("ID");
 L   ALTER TABLE ONLY public."MedicalResult" DROP CONSTRAINT "PK_MedicalResult";
       public            postgres    false    214            V           2606    16454    Service PK_Service 
   CONSTRAINT     V   ALTER TABLE ONLY public."Service"
    ADD CONSTRAINT "PK_Service" PRIMARY KEY ("ID");
 @   ALTER TABLE ONLY public."Service" DROP CONSTRAINT "PK_Service";
       public            postgres    false    217            `           2606    19541    Patients Patients_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Patients"
    ADD CONSTRAINT "Patients_pkey" PRIMARY KEY ("Id");
 D   ALTER TABLE ONLY public."Patients" DROP CONSTRAINT "Patients_pkey";
       public            postgres    false    225            d           2606    19567    Services Services_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Services"
    ADD CONSTRAINT "Services_pkey" PRIMARY KEY ("Id");
 D   ALTER TABLE ONLY public."Services" DROP CONSTRAINT "Services_pkey";
       public            postgres    false    229            b           2606    19548    Users Users_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("Id");
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public            postgres    false    227            v           2606    25965 '   Appointments Appointments_DoctorId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Appointments"
    ADD CONSTRAINT "Appointments_DoctorId_fkey" FOREIGN KEY ("DoctorId") REFERENCES public."Doctors"("Id") ON UPDATE CASCADE ON DELETE SET NULL;
 U   ALTER TABLE ONLY public."Appointments" DROP CONSTRAINT "Appointments_DoctorId_fkey";
       public          postgres    false    223    3166    231            w           2606    25970 (   Appointments Appointments_PatientId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Appointments"
    ADD CONSTRAINT "Appointments_PatientId_fkey" FOREIGN KEY ("PatientId") REFERENCES public."Patients"("Id") ON UPDATE CASCADE ON DELETE SET NULL;
 V   ALTER TABLE ONLY public."Appointments" DROP CONSTRAINT "Appointments_PatientId_fkey";
       public          postgres    false    225    231    3168            x           2606    25975 (   Appointments Appointments_ServiceId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Appointments"
    ADD CONSTRAINT "Appointments_ServiceId_fkey" FOREIGN KEY ("ServiceId") REFERENCES public."Services"("Id") ON UPDATE CASCADE ON DELETE SET NULL;
 V   ALTER TABLE ONLY public."Appointments" DROP CONSTRAINT "Appointments_ServiceId_fkey";
       public          postgres    false    231    3172    229            |           2606    25995 -   DoctorSchedules DoctorSchedules_DoctorId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."DoctorSchedules"
    ADD CONSTRAINT "DoctorSchedules_DoctorId_fkey" FOREIGN KEY ("DoctorId") REFERENCES public."Doctors"("Id") ON UPDATE CASCADE ON DELETE SET NULL;
 [   ALTER TABLE ONLY public."DoctorSchedules" DROP CONSTRAINT "DoctorSchedules_DoctorId_fkey";
       public          postgres    false    235    3166    223            r           2606    25945 !   Doctors Doctors_DepartmentId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Doctors"
    ADD CONSTRAINT "Doctors_DepartmentId_fkey" FOREIGN KEY ("DepartmentId") REFERENCES public."Departments"("Id") ON UPDATE CASCADE ON DELETE SET NULL;
 O   ALTER TABLE ONLY public."Doctors" DROP CONSTRAINT "Doctors_DepartmentId_fkey";
       public          postgres    false    221    3164    223            o           2606    16496 !   Appointment FK_Appointment_Doctor    FK CONSTRAINT     �   ALTER TABLE ONLY public."Appointment"
    ADD CONSTRAINT "FK_Appointment_Doctor" FOREIGN KEY ("Doctor_Id") REFERENCES public."Doctor"("ID");
 O   ALTER TABLE ONLY public."Appointment" DROP CONSTRAINT "FK_Appointment_Doctor";
       public          postgres    false    219    218    3162            p           2606    16506 "   Appointment FK_Appointment_Service    FK CONSTRAINT     �   ALTER TABLE ONLY public."Appointment"
    ADD CONSTRAINT "FK_Appointment_Service" FOREIGN KEY ("Service_Id") REFERENCES public."Service"("ID");
 P   ALTER TABLE ONLY public."Appointment" DROP CONSTRAINT "FK_Appointment_Service";
       public          postgres    false    218    217    3158            m           2606    16486 *   DoctorSchedule FK_DoctorSchedule_Doctor_02    FK CONSTRAINT     �   ALTER TABLE ONLY public."DoctorSchedule"
    ADD CONSTRAINT "FK_DoctorSchedule_Doctor_02" FOREIGN KEY ("Doctors_Id") REFERENCES public."Doctor"("ID");
 X   ALTER TABLE ONLY public."DoctorSchedule" DROP CONSTRAINT "FK_DoctorSchedule_Doctor_02";
       public          postgres    false    219    3162    215            q           2606    16511    Doctor FK_Doctor_Department    FK CONSTRAINT     �   ALTER TABLE ONLY public."Doctor"
    ADD CONSTRAINT "FK_Doctor_Department" FOREIGN KEY ("Department_Id") REFERENCES public."Department"("ID");
 I   ALTER TABLE ONLY public."Doctor" DROP CONSTRAINT "FK_Doctor_Department";
       public          postgres    false    219    216    3156            k           2606    16471 *   MedicalResult FK_MedicalResult_Appointment    FK CONSTRAINT     �   ALTER TABLE ONLY public."MedicalResult"
    ADD CONSTRAINT "FK_MedicalResult_Appointment" FOREIGN KEY ("Appoitment_Id") REFERENCES public."Appointment"("ID");
 X   ALTER TABLE ONLY public."MedicalResult" DROP CONSTRAINT "FK_MedicalResult_Appointment";
       public          postgres    false    218    3160    214            l           2606    16476 %   MedicalResult FK_MedicalResult_Doctor    FK CONSTRAINT     �   ALTER TABLE ONLY public."MedicalResult"
    ADD CONSTRAINT "FK_MedicalResult_Doctor" FOREIGN KEY ("Doctor_Id") REFERENCES public."Doctor"("ID");
 S   ALTER TABLE ONLY public."MedicalResult" DROP CONSTRAINT "FK_MedicalResult_Doctor";
       public          postgres    false    214    219    3162            n           2606    16491    Service FK_Service_Department    FK CONSTRAINT     �   ALTER TABLE ONLY public."Service"
    ADD CONSTRAINT "FK_Service_Department" FOREIGN KEY ("Department_Id") REFERENCES public."Department"("ID");
 K   ALTER TABLE ONLY public."Service" DROP CONSTRAINT "FK_Service_Department";
       public          postgres    false    217    216    3156            y           2606    25980 0   MedicalResults MedicalResults_AppointmentId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."MedicalResults"
    ADD CONSTRAINT "MedicalResults_AppointmentId_fkey" FOREIGN KEY ("AppointmentId") REFERENCES public."Appointments"("Id") ON UPDATE CASCADE ON DELETE SET NULL;
 ^   ALTER TABLE ONLY public."MedicalResults" DROP CONSTRAINT "MedicalResults_AppointmentId_fkey";
       public          postgres    false    231    3174    233            z           2606    25985 +   MedicalResults MedicalResults_DoctorId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."MedicalResults"
    ADD CONSTRAINT "MedicalResults_DoctorId_fkey" FOREIGN KEY ("DoctorId") REFERENCES public."Doctors"("Id") ON UPDATE CASCADE ON DELETE SET NULL;
 Y   ALTER TABLE ONLY public."MedicalResults" DROP CONSTRAINT "MedicalResults_DoctorId_fkey";
       public          postgres    false    223    3166    233            {           2606    25990 ,   MedicalResults MedicalResults_PatientId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."MedicalResults"
    ADD CONSTRAINT "MedicalResults_PatientId_fkey" FOREIGN KEY ("PatientId") REFERENCES public."Patients"("Id") ON UPDATE CASCADE ON DELETE SET NULL;
 Z   ALTER TABLE ONLY public."MedicalResults" DROP CONSTRAINT "MedicalResults_PatientId_fkey";
       public          postgres    false    225    3168    233            u           2606    25960 #   Services Services_DepartmentId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Services"
    ADD CONSTRAINT "Services_DepartmentId_fkey" FOREIGN KEY ("DepartmentId") REFERENCES public."Departments"("Id") ON UPDATE CASCADE ON DELETE SET NULL;
 Q   ALTER TABLE ONLY public."Services" DROP CONSTRAINT "Services_DepartmentId_fkey";
       public          postgres    false    3164    221    229            s           2606    25950    Users Users_DoctorId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_DoctorId_fkey" FOREIGN KEY ("DoctorId") REFERENCES public."Doctors"("Id") ON UPDATE CASCADE ON DELETE SET NULL;
 G   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_DoctorId_fkey";
       public          postgres    false    227    223    3166            t           2606    25955    Users Users_PatientId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_PatientId_fkey" FOREIGN KEY ("PatientId") REFERENCES public."Patients"("Id") ON UPDATE CASCADE ON DELETE SET NULL;
 H   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_PatientId_fkey";
       public          postgres    false    227    225    3168                  x������ � �         I   x�M��	�@�wRE��Mr )�
��:N�@a~C	D9�F4^R�-j�����i�O'W��>%u��� �[�            x������ � �         �   x�u�M
�0���=�࿇�0�ŝ҅E���R(����x�77�0m\��|�$���D(Q��j�Q��K�P�06x��#\��$j�U	��<u#�3/ڲ,���}���^�VQ���0�b�SH���:/�؎{a��o@l��,J�k��wt:��mR���?�	g^��%"��ɯ���at�i�O�Th;r�+���l�            x������ � �            x������ � �          �   x�}�Q
�0����H��zO��|/ >�*�@w��Ff���Ж@?�~������g�J}��j�,�b(�����.5JE��L�Q����+Qeb|�V:]�l�
�J�L-�oi'���6}�0\����)]�#U}��D4HF
��@��1��`勓1�!����q:+b�N�Ì�3��T�         �   x�E�Q
�@D�'��*����^��"�x��n���^ar#ǅ�G�I2/)�3Gv�0^�2JN�
^�bb���x��
�m6���|��Zn���+�%g�R���X��A�SG����������+3��]e-            x������ � �         �   x�-�A�0�u{���-����� jܐ�p���P!�x��7rJ\��i;�N�	_����&�nrċ�j0�T�8���DϤ5�sY�C��������l��*�i�p��N�*�M��Q��0R�k�H��9�z�|aT�Rϐ�̢�:K���>�ָ�����u��Z� y΄�         /  x�u��J�@�ϻO1w�2����W=	��z�!Ђ�Er�+x*"""���ik�g�}#'������o~��tOs����i.t�B���;��B+��]л;���B��A7���-�%̀�(si���[V�As�P�R7aa�B�Z�,�ܚV��䅒B_���<Aw�ѦdX0Cv߳F7nxK^l�1��F�y2��f�zf�r��"FJ��hfQ��48^أx�U�öpX�2����F�O���o�'��:Wp��0��� 9��/�x��σ��_�u��8N�Ѷ�����            x������ � �         �  x��XKn�F]���r�� ��,���A�d�$��8O�L�H� ��,P�h�I_�y��WEJ�DQ��d �-���W��^W˵�o&3i>�/�"��L�k�|�i~��+���\���0w��[8���x9�㽃S`,��`V�Vh?ń �C,Ͱ*2��wZ�6��ۆw˵���^�w|#�������n�i7���T
�|�����X�>����c�2a�vg�����6`�~2�J�zX��R�7֦�>�^�zy�� _J����>�/���I$�q&�mȥP$2�-��-��vH�|�oaG�/�g�n gPs8�>�:��8��� /?�-p򑘾%�%
�tq�ځo�2�"�wL���x	���1���8f�1���Z�6;�L&1,���+���5��`=�r-p �މ<+�@�(P��&��^J҅��� ��@�ã���H�hpN�jmg�w��PA�+�]��?�%����x��%���f�>��;�G��B�fA���\
!�d��T�Zg84n�ɩX�^D��t�%!ٚ�M��J���d��t�w��*%��P��KRw���}*e�*��~]@W��iX�J�#ߋv)e������Y�B�.�H��&�K�aҪH��5�,�sx])�lX>֡U�=2q�SD��f-����gx�C��7��@)^I�Ȅ�h 9��M/���k^{����R"����J񙕶*���w|��5��8��c9�C1N�"U�.����#ޮ�]nNk�/e��N�W��g�yö֘��J�g��5���߽��ou��v�����o�����˳R��A��g�0z��<�A��H�~5g���������P�D��g��#3v��e��H_���0���~�BEY��N�����bZ�f��ڢ�D���
�[<��m�}4��2E���V���G�ҤFn������yM �7O���ig
�A�a�E,(ڗ����JT����Ox��mM ��|'�{���;n�iߑ�����ۀX^���:Qc����y��w�Wb���_�<{@���#@.}q�"xQ�x�co���En���u)z��z�l�g͢x]Z�k�ÐM"7��fS�i����e��� ���2�	o�`���#	��ۥI�������ڃ�1��/�����~Ǘ�_z:��[�ןۯ[�m��         �  x�m�ݎ�0 @���^W)Z�nD��Aa��@�Hg��"���1�lv}�/'gx˚76м�<�9��h2[LZ�6��Ԕp���|�k�4#?D�h맛���K�{o��ʦ�#���� "HzZ����QڜUw��U���%~o��]H��fW�|�T׋ڡH�ΟY��OV�i��W��Y�|�3����=�nʒ� j���S�J���$&�*8B�t� ������@>��?�����e�N.å/)+�FuV��}���f�Q3��J�de�^�U�rT��C��� T �j���=M�,M>���LV�rEz>YYP����$�+tK��e�����e��q?4cA�MUb�C�'�P�dk^%��;),�b�����u�n�r���f��y��St)ooTw�����3wL�ۮ�c�q�g@�_�ԏ��!T�h�n-:����D��+x�&Z�u���Xv]��%��H�D�!~CA~be��     